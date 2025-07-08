const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const mailOptions = {
    from: `"Gregg from Brokeless" <${gmailEmail}>`,
    to: user.email,
    subject: "Welcome to Brokeless 🎉",
    html: `
      <h1>Welcome to Brokeless, ${user.email.split("@")[0]}!</h1>
      <p>Thanks for signing up. I hope you enjoy your expirience Check out my portfolio here:</p>
      <a href="https://greggcarem.github.io/Portafolio-Gregoire-Careme/">My Portfolio</a>
    `,
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => console.log("Welcome email sent to:", user.email))
    .catch((err) => console.error("Failed to send email:", err));
});
