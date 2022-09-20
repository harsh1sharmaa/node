const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const dbConnect = require("./mongodbconnection");
var nodemailer = require('nodemailer');


const app = express();
app.use(express.urlencoded());

app.use(express.json());
app.set("view engine", "ejs");
// Set up Global configuration access
dotenv.config();

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});

app.get("/", (req, res) => {
  res.render("form");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/user/generateToken", (req, res) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
    roles: "admin",
  };

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

app.post("/sendmail", (req, res) => {
  // Tokens are generally passed in the header of the request
  // Due to security reasons.
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

//user registration

app.post("/register", (req, res) => {
  // Validate User Here
  // Then generate JWT Token
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
    name: name,
    email: email,
  };
  const token = jwt.sign(data, jwtSecretKey);
  res.send(token);
});

app.post("/login", (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  // console.log(req.header('barrer'))

  try {
    const token = req.header('barrer')
    // console.log(token)
    const verified = jwt.verify(token, jwtSecretKey);
    console.log(verified);

    if (verified) {
      //  let data= getdata()
      let data ={
        success: true
      }
      return res.status(200).send(data);
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const getdata = async() => {
  let collection = await dbConnect();
  //  console.log(req.body);
  let result = await collection.find({});
  return result
};