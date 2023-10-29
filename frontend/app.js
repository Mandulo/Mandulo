
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const keys = require("./configuration/keys");
const Course = require("./models/course");
const Student = require("./models/student");
const bodyParser = require("body-parser");
const app = express();
const AWS = require("aws-sdk");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const fileUpload = require('express-fileupload');
const fetch = require("node-fetch");
app.use(fileUpload());
// require("dotenv").config();
app.put('/upload', async ({files},res)=>{
  AWS.config.update({
    accessKeyId: keys.amazon.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.amazon.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1"
  });
  
  const s3 = new AWS.S3();

  const fileContent = Buffer.from(files.dt.data);
  console.log(fileContent)
  const params = {
    Bucket: "visitor-student-image-storage",
    Key: files.dt.name,
    Body: fileContent,
  };
  s3.upload(params, (err,data) =>{
    if(err){
      throw err;
    }
    res.send({
      "response_code": 200,
      "response_message":"Success",
      "response_data":data,
    });
  })
})

app.use(express.static("public"));

const url = `https://tep4cykdch.execute-api.us-east-1.amazonaws.com/dev/student-image-storage/testp.jpeg`;


// const dynamoclinet = new AWS.DynamoDB.DocumentClient();
// const Table = "student-record";

// const getCharacters = async () => {
//   const params = {
//     TableName: Table,
//   };
//   const chara = await dynamoclinet.scan(params).promise();
//   // console.log(chara);
//   return chara;
// };

// getCharacters();



app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/person", (req, res) => {
  res.render("persondetail");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
