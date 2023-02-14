const mongoose = require(`mongoose`);
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(
  `mongodb+srv://${process.env.USER_MD}:${process.env.PASSWORD_MD}@proyectorcode.ql4ww4b.mongodb.net/RegistroPage?retryWrites=true&w=majority`
);
// mongoose.connect(`mongodb://${process.env.USER_MD}:${process.env.PASSWORD_MD}@containers-us-west-82.railway.app:${process.env.PORT_MD}`);

// mongoose.connect(`mongodb+srv://${process.env.USER_MD}:${process.env.PASSWORD_MD}@esteban.jyb3b9g.mongodb.net/?retryWrites=true&w=majority`);

app.set("port", process.env.PORT | 4000);
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRoutes = require("./src/routes/user");
app.use("/api/user", userRoutes);

const authRoutes = require("./src/routes/auth");
const postRoutes = require("./src/routes/post");

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

// server
app.listen(app.get("port"), () => {
  console.log("servidor en funcionamiento en puerto", app.get("port"));
});
