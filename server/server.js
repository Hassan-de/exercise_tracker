const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require('dotenv').config();



mongoose
  .connect("mongodb+srv://hassan:Hassan1Nasir@cluster0.vwpsono.mongodb.net/finalproject?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));





const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(require('./router/auth'));
app.use(require('./router/activities'));








const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is at port no. https://localhost:${PORT}`)
})
