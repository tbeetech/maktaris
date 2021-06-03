const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const mailcomposer = require("mailcomposer");

const auth = {
  auth: {
    api_key: "875340469e30e11646f86472f7f94df6-2a9a428a-56d8ed8f",
    domain:"sandbox8c64b7afbe5a4180ad420abcb23977b2.mailgun.org", // Setup new Domain.
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "beatsbytbee@gmail.com",
    subject: subject,
    text: text
    // text: text,
  };


  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;