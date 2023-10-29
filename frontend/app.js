const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const keys = require("./configuration/keys");
const bodyParser = require("body-parser");
const app = express();
const AWS = require("aws-sdk");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

const uuid = require("uuid");
const multer = require("multer");
const multerS3 = require("multer-s3");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

AWS.config.update({
  accessKeyId: keys.amazon.AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.amazon.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

const s3 = new AWS.S3();
let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "visitor-student-image-storage",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

const dynamoclinet = new AWS.DynamoDB.DocumentClient();
const Table = "student-record";

const getDB = async () => {
  const params = {
    TableName: Table,
  };
  const dbdata = await dynamoclinet.scan(params).promise();
  return dbdata;
};

// getCharacters();

app.put("/upload", upload.single("dt"), async (req, res) => {
  await res.redirect("/");
});
app.get("/", async (req, res) => {
  let student = await getDB();
  item = student.Items;
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
    console.log("-----");
  }
  res.render("home", {
    studentdata: item,
  });
});
app.get("/person", (req, res) => {
  res.render("persondetail");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
