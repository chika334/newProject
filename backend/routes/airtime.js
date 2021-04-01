// const Wallet = require('../model/Wallet');
const User = require("../model/User");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const axios = require("axios");
// const Pay = require("../model/PayRequest");
const { v4: uuidv4 } = require("uuid");
const Transaction = require("../model/Transaction");

// router.get('/getPayment', auth, async (req, res) => {
// 	const credit = await Pay.find({ walletId: req.user.walletId });
// 	res.status(200).json(credit);
// });

// get all airtimes
router.get("/getTransaction", auth, async (req, res) => {
  // const transaction = await Transaction.find({ _id: req.user._id });
  // res.json(transaction);
  try {
    const transaction = await Transaction.find({ userId: req.user._id });
    if (!transaction) throw Error("No items");

    res.json(transaction);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
  // const transaction = await Transaction.find({ userId: req.user._id });
  // res.json(transaction);
});

// Buy airtime
router.post("/creditTransaction", auth, async (req, res) => {
  const { amount, service, phone, name } = req.body;
  const requestId = uuidv4();

  const user = `${process.env.email_login}:${process.env.password_login}`;
  const base64 = Buffer.from(user).toString("base64");

  const config = {
    headers: {
      Authorization: `Basic ${base64}`,
    },
  };

  const body = {
    request_id: requestId,
    serviceID: service,
    amount: amount,
    phone: phone,
  };

  console.log(body);

  const userId = await User.findById(req.user._id);

  // console.log(userId);
  // const userId = await Wallet.findById(req.user.walletId);
  //console.log(userId)

  axios
    .post(`${process.env.airtime}`, body, config)
    .then((response) => {
      console.log(response);
      const transaction = new Transaction({
        amount: response.data.amount,
        requestId: response.data.requestId,
        product_name: response.data.content.transactions.product_name,
        date: response.data.transaction_date.date,
        total_amount: response.data.content.transactions.total_amount,
        transactionId: response.data.content.transactions.transactionId,
        status: response.data.response_description,
        userId: userId._id,
      });

      transaction.save();
      if (
        response.data.content.transactionId ==
        response.data.content.transactionId
      ) {
        res.status(200).json({
          transaction,
        });
        return;
      } else {
        throw err;
      }
    })
    .catch((err) => console.log(err));
});

// single airtime
router.post("/Transaction", auth, async (req, res) => {
  const { trans } = req.body;

  const user = `${process.env.email_login}:${process.env.password_login}`;
  const base64 = Buffer.from(user).toString("base64");

  const config = {
    headers: {
      Authorization: `Basic ${base64}`,
    },
  };

  const body = {
    request_id: trans,
  };

  // const userId = await Wallet.findById(req.user.walletId);

  axios
    .post(`${process.env.specificTrans}`, body, config)
    .then(async (response) => {
      let transaction = new Transaction({
        amount: response.data.content.transactions.amount,
        requestId: req.body.trans,
        product_name: response.data.content.transactions.type,
        date: response.data.transaction_date.date,
        total_amount: response.data.content.transactions.total_amount,
        transactionId: response.data.content.transactions.transactionId,
        status: response.data.response_description,
        // walletId: userId._id
      });

      if (
        response.data.content.transactionId ==
        response.data.content.transactionId
      ) {
        res.status(200).json({
          transaction,
        });
        return;
      } else {
        throw err;
      }
    })
    .catch((err) => {
      // res.status(400).json({
      // 	msg: 'Error occured while querying transaction'
      // });
      console.log(err);
    });
});

module.exports = router;
