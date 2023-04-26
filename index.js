const express = require("express");
const app = express();
const port = 5000;

/**
 * mongoose - mongoDB 기반의 ODM 라이브러리로 데이터베이스를 더 쉽게 다루게 해줌
 * 1. schema를 이용한 데이터 모델 정의
 * 2. schema 데이터를 object객체로 다룰 수 있음
 * 3. CRUD 연산수행
 * 4. 데이터 검증 및 트랜잭션 처리등 다양한 기능 제공
 */
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://rockbell89:database@boilerplate.tqciddq.mongodb.net/test",
    {
      useNewUrlParser: true, // MongoDB 드라이버가 새로운 URL 구문 분석기를 사용하도록 설정
      useUnifiedTopology: true, // MongoDB 드라이버가 새로운 토폴로지 엔진을 사용하도록 설정 (서버 연결 안정화 및 캡슐화)
      useCreateIndex: true, // 색인을 생성
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Conntected..."))
  .catch((err) => console.error(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
