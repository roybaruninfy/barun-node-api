const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");
require("dotenv").config();
// db connection
connectDB();
///////////////////////////
const port = process.env.PORT | 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is running in port ${port}`);
});
