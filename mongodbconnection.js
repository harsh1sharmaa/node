const { MongoClient } = require("mongodb");
// Connection URL
const url = "mongodb://root:cedcommerce@127.0.0.1:27017/";
const client = new MongoClient(url);
// Database Name
const dbName = "home";

async function dbConnect() {
    let result;
    try {
     result = await client.connect();
  } catch (error) {
    console.log(error);
  }

  let data = result.db(dbName);
  return data.collection("notifications");
  // return data.collection("test");
  //    console.log(await collection.find({}).toArray());
}

module.exports = dbConnect;

//  async function fun(){
//      let collection=await dbConnect();
//      let data=await collection.find({}).toArray();
//      console.log( data );

// }
// fun();

// dbConnect().then( (resp) => {

//     resp.find({}).toArray().then( (obj) => {
//         console.log(obj);
//     })

// }
// )
// getData();
