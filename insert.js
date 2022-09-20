const dbConnect = require('./mongodbconnection');

const insert=async() => {

    let collection=await dbConnect();

    let result =await collection.insertMany([
        {name:"harsh", email:"harsh@example.com"},
     
    ]);
    console.log(result);
}

insert();