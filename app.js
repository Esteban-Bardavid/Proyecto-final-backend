const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();



const app = express();

mongoose.connect(`mongodb+srv://${process.env.USER_MD}:${process.env.PASSWORD_MD}@esteban.jyb3b9g.mongodb.net/?retryWrites=true&w=majority`);

app.set('port', process.env.PORT | 4000)

app.use(cors())
app.use(morgan("dev"))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const userRoutes = require('./src/routes/user');
const authRoutes = require('./src/routes/auth')
const postRoutes = require('./src/routes/post')
const emailRoutes = require('./src/routes/email')
const loginRoutes = require('./src/routes/LoginRoute')
const adminProductsRoutes = require('./src/routes/adminProducts')
const adminShoppingRoutes = require('./src/routes/adminShopping')

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/email', emailRoutes)
app.use('/api/Login', loginRoutes)
app.use ('/api/adminProducts', adminProductsRoutes)
app.use ('/api/adminShopping', adminShoppingRoutes)


app.listen(app.get("port"), () => {
})