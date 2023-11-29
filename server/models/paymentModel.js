const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    debitPayment: {
        cardNumber: Number,
        cvv: Number,
      },
      creditPayment: {
        cardNumber: Number,
        cvv: Number,
      },
      upiPayment: {
        upiId: String,
      },
      paymentDate: {
        type: Date,
        default: Date.now,
      },
  },
  
);

const paymentModel = mongoose.model("Payment", paymentSchema);

module.exports = paymentModel;
