import express = require("express");
import bodyParser = require("body-parser")
import jwt = require("jsonwebtoken");
import { randomBytes, createHmac } from "crypto";
import dotenv = require("dotenv");
import { MongoClient } from "mongodb";

function generateToken(email: string) {
  return jwt.sign({ email: email }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
}

function verifyToken(req: express.Request, res: express.Response) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.json(false);
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err: any) => {
    return res.json(!err);
  });
}

new MongoClient("mongodb://localhost:27017").connect().then(client => {
  dotenv.config();
  const users = client.db("boilerplate").collection("users");
  const app = express();
  app.use(bodyParser.json());

  app.post("/register", function (req, res) {
    const salt = randomBytes(16).toString("hex");
    var hash = createHmac("sha512", salt);
    hash.update(req.body.password)
    users.insertOne({
      _id: req.body.email,
      salt: salt,
      password: hash.digest("hex")
    }).then(() => res.json(generateToken(req.body.email)))
      .catch(() => res.sendStatus(409));
  })

  app.post("/login", function (req, res) {
    users.findOne({ _id: req.body.email }).then(doc => {
      if (doc) {
        res.json(generateToken(req.body.email));
      } else {
        res.sendStatus(401);
      }
    });
  });

  app.get("/authenticated", function (req, res) {
    verifyToken(req, res);
  });

  app.listen(8081);
});
