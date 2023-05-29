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
      const link = `http://localhost:3000/resetPassword/${user._id}/${token}`;
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: `${user.email}`,
          pass: `${token}`,
        },
      });
  
      var mailOptions = {
        from: "Bardavidpablo@gmail.com",
        to: "Bardavidesteban@gmail.com",
        subject: "Password Reset",
        text: link,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error(error);
        } else {
        }
      });
    } catch (error) {}
  });
  