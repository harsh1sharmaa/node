const dbConnect= require('./mongodbconnection');


const update= async() => {

    let collection=await dbConnect();

  let result = await collection.deleteMany({

            name:"harsh sharma"
        
    })
    console.log(result);
}

update();