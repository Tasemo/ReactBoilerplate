import express = require("express");
import bodyParser = require('body-parser')
import jwt = require('jsonwebtoken');
import dotenv = require('dotenv');
dotenv.config();

function generateToken(email: string) {
  return jwt.sign({ email: email }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
}

function verifyToken(req: express.Request, res: express.Response) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.json(false);
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err: any) => {
    return res.json(!err);
  });
}

const app = express();
app.use(bodyParser.json());
app.post("/login", function (req, res) {
  res.json(generateToken(req.body.email));
});
app.get("/authenticated", function (req, res) {
  // res.json(false);
  verifyToken(req, res);
})

app.listen(8081);
