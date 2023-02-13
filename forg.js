const EmailModel = require('../models/email_model');
const UsersModel = require('../models/users_model');
const nodemailer = require('nodemailer')

app.post("/ForgotPassword", async (req, res) => {
    const { email } = req.body;
    try {
      const oldUser = await User.findOne({ email });
      if (!user) {
        return res.json({ status: "User Not Exists!!" });
      }
      const secret = JWT_SECRET + user.password;
      const token = jwt.sign({ email: user.email, id: user._id }, secret, {
        expiresIn: "5m",
      });
      const link = `http://localhost:3000/resetPassword/${req.usuario.id}`;
      var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f24840f334d194",
            pass: "8543799b40ddf7"
        },
      });
  
      var mailOptions = {
        from: emailUser.email,
        to: "Bardavidesteban@gmail.com",
        subject: "Password Reset",
        text: link,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log(link);
    } catch (error) {}
  });
  