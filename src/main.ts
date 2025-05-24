import express from "express";
import errorHandler from "./middlewares/errorHandler";
import dotenv from "dotenv";
import db from "./config/db";
import { NextFunction, Request, Response } from "express";
import mysql from 'mysql2'

dotenv.config();

const app: express.Application = express();
const port: number = 3000;

app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/front/style.css");
});

app.get("/img/victor.ripert@epitech.eu.jpg", function (req, res) {
  res.sendFile(__dirname + "/front/img/victor.ripert@epitech.eu.jpg");
});

app.post("/", async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nom, email, sujet, msg } = req.body;
  if (!email || !nom || !sujet || !msg) {
     res.status(400).json({ msg: "Bad parameter" });
  }
  const date = new Date();
  let query: string =
    'INSERT INTO user (nom, email, sujet, msg, created_at) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nom, email, sujet, msg, date], (err) => {
    if (err) throw err;
    // let button: Element = document.getElementById('sendMsgButton');
    // button. // HERE !!!
    console.log('Message Posted');
    // req.url = '/';
    // next();
    res.status(200).json({ title: "Message Posted"}).sendFile(__dirname + "/front/img/victor.ripert@epitech.eu.jpg");;
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/front/index.html");
});

app.listen(port, () => {
  console.log(`TypeScript with Express : http://localhost:${port}/`);
});
