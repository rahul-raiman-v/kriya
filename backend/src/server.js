const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.listen(5000,()=>{
    console.log("Server running on Port 5000");
});

