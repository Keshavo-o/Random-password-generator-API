const express = require("express");
const staticrouter = require("./routes/static_router.js");
const passwordrouter = require("./routes/password_router.js");
const cookieParser = require("cookie-parser");

const mongodbconn = require("./mongo_conn.js");
const path = require("path");
const checkauthentication = require("./middlewares/user_authen.js");

const app = express();

//mongoDb conn
mongodbconn("mongodb://localhost:27017/password_generator")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
//specifying default engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//user authentication


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//for handling cookies

app.use("/", staticrouter);//This is referred to as default login page
app.use("/password", checkauthentication);
app.use("/password", passwordrouter);
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});