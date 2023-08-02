const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Crete a Express Framework
const app = express()

// Add Middlewares
app.use(cors())

app.use(express.json())

//Add Routes
const userRouter = require("./routes/user");

app.use("/hello/user", userRouter);

// Declare a PORT and Database URL
const PORT = 8088;
const MONGO_DB_CONNECTION_URL = 'mongodb://127.0.0.1:27017/hello'


// Check runing port
app.listen(PORT, () => {
    console.log(`Successfully runing on Port : ${PORT}`);
  });
  
// Mongo DB Connections
  mongoose
    .connect(MONGO_DB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to mongodb !"))
    .catch((err) => console.log(`Error has occured: ${err}`));
