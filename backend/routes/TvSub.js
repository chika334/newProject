// const Wallet = require('../model/Wallet');
const express = require('express');
const User = require('../model/User');
const router = express.Router();
const auth = require('../middleware/auth');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const Transaction = require('../model/Transaction');
const Smartcard = require('../model/smartCard');
const payTVSubSchema = require("../model/payTvSub")

router.get('/getverifySmartcardNumber', auth, async (req, res) => {
	// const userId = await User.findById(req.user._id);
	// console.log(userId, "transactions");
	const smartCards = await Smartcard.find({ walletId: req.user.walletId });
	res.json(smartCards);
});

// get all smart cards
router.get('/getSmartcard', auth, async (req, res) => {
	// const userId = await User.findById(req.user._id);
	// console.log(userId, "transactions");
	const transaction = await Transaction.find({ userId: req.user._id });
	res.json(transaction);
});

// verify smart card number
router.post('/verifySmartcardNumber', auth, async (req, res, err) => {
	//console.log(req.body)
	const { service, smartCard, transactionId, select } = req.body;

	const user = `${process.env.email_login}:${process.env.password_login}`;
	const base64 = Buffer.from(user).toString('base64');

	config = {
		headers: {
			Authorization: `Basic ${base64}`
		}
	};

	const body = {
		billersCode: smartCard,
		serviceID: service
	};

	// const userId = await Wallet.findById(req.user.walletId);
	const userId = await User.findById(req.user._id);

	axios
		.post(process.env.verifyMeterNumber, body, config)
		.then((response) => {
			const smartCards = new Smartcard({
				Customer_Name: response.data.content.Customer_Name,
				Smartcard_Number: smartCard,
				Customer_ID: response.data.content.Customer_ID,
				transactionID: req.body.transactionId,
				userId: userId._id,
				select: select
			});
			//smartCards.save();
			if (response.data.content.Customer_Name == response.data.content.Customer_Name) {
				res.status(200).json({
					smartCards
				});
				return;
			} else {
				throw err;
			}
		})
		.catch((err) => {
			// res.status(400).json({
			// 	success: false,
			// 	msg: 'Invalid Smartcard Number. Please check and Try Again'
			// });
			console.log(err);
		});
});

// pay tv sub bill
router.post('/payTvBill', auth, async (req, res, err) => {
	const { name, AmountInt, smartCard, service, select, phone } = req.body;

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
		billerCode: smartCard,
		variation_code: select,
		amount: AmountInt,
		phone: phone
	};

	// const userId = await Wallet.findById(req.user.walletId);
	const userId = await User.findById(req.user._id);

	axios
		.post(`${process.env.PAYTVBILL}`, body, config)
		.then((response) => {
			const transaction = new Transaction({
				smartCard: smartCard,
				userId: userId._id,
				type: response.data.content.type,
				date: response.data.transaction_date.date,
				response_description: response.data.response_description,
				transactionId: response.data.content.transactions.transactionId,
				status: response.data.response_description,
				amount: response.data.amount,
				total_amount: response.data.content.transactions.total_amount,
				product_name: response.data.content.product_name
			});
			transaction.save();
			if (res.data.response_description === 'TRANSACTION SUCCESSFUL') {
				res.status(200).json({
					transaction,
					msg: 'success'
				});
				return;
			} else {
				throw err;
			}
		})
		.catch((err) => {
			// res.status(400).json({
			// 	msg: 'Below minimum amount allowed'
			// });
			console.log(err);
		});
});

// single tvsub
router.post('/TvSubTranx', auth, async (req, res) => {
	const { trans } = req.body;

	const user = `${process.env.email_login}:${process.env.password_login}`;
	const base64 = Buffer.from(user).toString('base64');

	const config = {
		headers: {
			Authorization: `Basic ${base64}`
		}
	};

	const body = {
		request_id: trans
	};

	// const userId = await Wallet.findById(req.user.walletId);
	const userId = await User.findById(req.user._id);

	axios
		.post(`${process.env.specificTrans}`, body, config)
		.then(async (response) => {
			let transaction = new Transaction({
				smartCard: smartCard,
				userId: userId._id,
				type: response.data.content.type,
				date: response.data.transaction_date.date,
				response_description: response.data.response_description,
				transactionId: response.data.content.transactions.transactionId,
				status: response.data.response_description,
				amount: response.data.amount,
				total_amount: response.data.content.transactions.total_amount,
				product_name: response.data.content.product_name
			});

			if (response.data.content.transactionId == response.data.content.transactionId) {
				res.status(200).json({
					transaction
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
