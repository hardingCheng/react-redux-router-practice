const express = require("express");
const app = express();
const users = require("./routes/users")
const auth = require("./routes/auth")
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/api/auth",auth)
app.use("/api/users",users)

app.listen(3031,(req,res) => {
    console.log("服务器运行在3031端口上")
})
