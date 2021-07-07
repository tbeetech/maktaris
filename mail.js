const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "875340469e30e11646f86472f7f94df6-2a9a428a-56d8ed8f",
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