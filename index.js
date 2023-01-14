import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();

const PORT = 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

// dotenv Code

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

// Server Connection Code

app.listen(PORT, () =>
  console.log(`Server is Running Successfully on PORT ${PORT} `)
);
