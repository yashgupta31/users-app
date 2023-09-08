const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

//import database connection 
const conn = require("./db");

// check if connected to db or not!(This is not compulsory to write here, it is only write to check if db connected or not)
conn.on("connected", () => {
    console.log("Connected to MongoDB!");
});

app.use(express.json());
app.use(cors());

//Routes
app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log("Server Is Running On Port.. " + PORT));