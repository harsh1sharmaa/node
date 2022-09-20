const express = require("express");
const dbConnect = require("./mongodbconnection");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    let collection = await dbConnect();
       let result=await collection.find({}).toArray();

    // let result = await collection.inserOne(req.body);
  
    res.send(result);
});

//post()
app.post("/", async (req, res) => {
  let collection = await dbConnect();
   console.log(req.body);
//   let result = await collection.inserOne(req.body);

  res.send(req.body);
});
 

app.listen(5000);
