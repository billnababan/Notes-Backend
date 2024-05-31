const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const notesRoute = require("./route/Notes");
const cors = require("cors");

const { testConnection } = require("./database/Db");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(notesRoute);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Server is Running in http://localhost:${process.env.APP_PORT}`);
});
