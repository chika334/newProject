// const Wallet = require('../model/Wallet');
const express = require('express');
const User = require('../model/User');
const router = express.Router();
const auth = require('../middleware/auth');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
// const Data = require('../model/Data');
const Transaction = require('../model/Transaction');

// get all data transations
router.get('/dataTransaction', auth, async (req, res) => {
	try {
    const transaction = await Transaction.find({ userId: req.user._id });
    if (!transaction) throw Error('No items');

    res.status(200).json(transaction);
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
});

// buy data
router.post('/DataTransaction', auth, async (req, res) => {
	const { AmountInt, service, phone, variation } = req.body;
	const requestId = uuidv4();

	const user = `${process.env.email_login}:${process.env.password_login}`;
	const base64 = Buffer.from(user).toString('base64');

	const config = {
		headers: {
			Authorization: `Basic ${base64}`
		}
	};

	const body = {
		request_id: requestId,
		serviceID: service,
		amount: AmountInt,
		billersCode: phone,
		variation_code: variation,
		amount: AmountInt,
		phone: phone
	};

	// const userId = await Wallet.findById(req.user.walletId);
	const userId = await User.findById(req.user._id);

	axios
		.post(`${process.env.data_API}`, body, config)
		.then((res) => {
			const transaction = new Transaction({
				amount: res.data.amount,
				requestId: res.data.requestId,
				product_name: res.data.content.transactions.product_name,
				date: res.data.transaction_date.date,
				total_amount: res.data.content.transactions.total_amount,
				transactionId: res.data.content.transactions.transactionId,
				status: res.data.response_description,
				userId: userId._id
			});
			transaction.save();
			if (res.data.response_description === 'TRANSACTION SUCCESSFUL') {
				res.status(200).json({
					msg: 'success'
				});
				return;
			} else {
				throw err;
			}
		})
		.catch((err) =>
			// res.status(400).json({
			// 	msg: 'Error occured while querying transaction'
			// })
			console.log(err)
		);
	// }
});

// single data
router.post('/singleTransaction', auth, async (req, res) => {
	const { AmountInt, service, phone, variation } = req.body;
	const requestId = uuidv4();

	const user = `${process.env.email_login}:${process.env.password_login}`;
	const base64 = Buffer.from(user).toString('base64');

	const uniqueId = uuidv4();

	const config = {
		headers: {
			Authorization: `Basic ${base64}`
		}
	};

	const body = {
		request_id: requestId
	};

	const userId = await User.findById(req.user._id);
	// const userId = await Wallet.findById(req.user.walletId);

	axios
		.post(`${process.env.dataSingle}`, body, config)
		.then((res) => {
			const transaction = new Transaction({
				amount: response.data.content.transactions.amount,
				requestId: req.body.trans,
				product_name: response.data.content.transactions.type,
				date: response.data.transaction_date.date,
				total_amount: response.data.content.transactions.total_amount,
				transactionId: response.data.content.transactions.transactionId,
				status: response.data.response_description,
				userId: userId._id
				// uniqueId: uniqueId
			});
			//trans.save();
			if (response.data.content.transactionId == response.data.content.transactionId) {
				res.status(200).json({
					transaction
				});
				return;
			} else {
				throw err;
			}
		})
		.catch((err) =>
			res.status(400).json({
				msg: 'Error occured while querying transaction'
			})
		);
});

module.exports = router;
