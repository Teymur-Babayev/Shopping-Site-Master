var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "9mxqzs3cnjjrsp7j",
  publicKey: "6dpx3n9syzxtjy7n",
  privateKey: "3f821e852b8a193bce5eae5c1e1fc143",
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("aa", response);
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = req.body.amount;

  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    }
  );
};
