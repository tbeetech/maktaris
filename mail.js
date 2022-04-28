const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const dotenv = require('dotenv')
dotenv.config({path : './config/config.env'})


 
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API,
    domain:"mail.maktarisherbals.com", // Setup new Domain.
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

// const recipients = []

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: "maktarisherbalbackup@gmail.com",
    to: [email, "maktarisherbalbackup@gmail.com"], 
    subject: subject,
    html: text
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