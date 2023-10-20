require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());

const connectDb = require('./config/db')
app.use(require('./routers/router'));

app.get('/', (req, res, next) => {
    res.send("Hello");
    next()
});

const port = process.env.PORT || 5000;
connectDb();

app.listen(port, () => {
    console.log(`Server is live at port number : ${port}`)
});