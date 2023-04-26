require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5000;
const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// aaplication/json
app.use(bodyParser.json());

/**
 * mongoose - mongoDB 기반의 ODM 라이브러리로 데이터베이스를 더 쉽게 다루게 해줌
 * 1. schema를 이용한 데이터 모델 정의
 * 2. schema 데이터를 object객체로 다룰 수 있음
 * 3. CRUD 연산수행
 * 4. 데이터 검증 및 트랜잭션 처리등 다양한 기능 제공
 */
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  console.log("Connected....");
});

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/register", async (req, res) => {
  const user = await new User(req.body);
  try {
    const user = new User(req.body);
    const userStatus = await user.save();

    if (!userStatus) {
      const err = new Error("실패");
      res.status(400).json({ success: fail, err });
    }
    res.status(200).json({ success: true });
    console.log(userStatus);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
