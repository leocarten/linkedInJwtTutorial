var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config();

const userID = 11;
const name = "James";
const dob = "1999-03-06";

const my_jwt_token = jwt.sign({userID, name, dob}, process.env.JWT_TOKEN, {expiresIn: 3600});
console.log(my_jwt_token);

const myGeneratedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjExLCJuYW1lIjoiSmFtZXMiLCJkb2IiOiIxOTk5LTAzLTA2IiwiaWF0IjoxNzA3NjY3OTYwLCJleHAiOjE3MDc2NzE1NjB9.jODhxOu8Zl-Zh5tLS10yf8bHUvIfCCM4haBbnWMR5Qo";

try{
    const clientToken = jwt.verify(myGeneratedToken, process.env.JWT_TOKEN);
    console.log(clientToken);
}catch(err){
    console.log("Error decoding.");
}