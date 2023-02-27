const dbConnect = require("./mongodbconnection");

const insert = async () => {
  let collection = await dbConnect();
  console.log("dbConnect");
  // ,"637606d5884dbdedff0d79f7","63a543ede45e4447c9064b59"
  // let result =await collection.find().toArray();
  // let result2 = await collection.find({user_id:{$in:["63a543ede45e4447c9064b59","637606d5884dbdedff0d79f7"]}}).sort({"created_at":-1}).skip(1).map((doc)=>{return doc}).toArray()
  // let del=await collection.deleteMany({_id:{$in:result2}})
  let del2;
  let response;
  try {
    // let result = await pushProcessCode(collection);
    let result = await deleteNoti(collection);
    console.log(result);
    /* let response = await collection
      .aggregate([
        // { $match: { user_id: "63a543ede45e4447c9064b59" } },
        {
          $sort: {
            created_at: -1,
          },
        },
        {
          $group: {
            _id: {
              process_code: "$process_code",
              user_id: "$user_id",
            },
            count: { $sum: 1 },
            items: { $push: "$$ROOT._id" },
          },
        },
      ])
      .toArray();
    console.log(response);
    console.log("------------");
    let del_ids = [];
    response.forEach(function (obj) {
      let ids_array = obj.items;
      let arr = ids_array.slice(2);
      if (arr.length > 0) {
        console.log(arr);
        console.log("------------");
        del_ids = del_ids.concat(arr);
      }
    }); */
    // console.log(del_ids);
    // let deleted=await collection.deleteMany({_id:{$in:del_ids}})
    // console.log(deleted);

    /*    response = await collection
      .aggregate([
        { $match: { user_id: "63a543ede45e4447c9064b59" } },
        {
          $group: {
            _id: "$process_code",
            count: { $sum: 1 },
            items: { $push: "$$ROOT" },
          },
        },
        {
          $match: {
            count: { $gt: 1 },
          },
        }, */
    /*  { $unwind: "$items" },
        { $sort: { created_at: -1 } },
        { $skip: 1 }, */
    /* {
          $set: {
            status: {
              $cond: {
                if: {
                  $lt: ["$count", 2],
                },
                then: "delete",
                else: "Pass",
              },
            },
          },
        }, */
    /*    ])
      .toArray();
    console.log(response); */
    /*  response.forEach(async function (obj) {
          
      if (obj.count > 0) {
          
          console.log("inif");
          let id_array = await collection
            .find({ process_code: obj._id })
            .sort({ created_at: -1 })
            .skip(0)
            .map((doc) => {
              return doc._id;
            })
            .toArray();
            
          console.log("id_array");
          console.log(id_array);
          
        //   let deleted=await collection.deleteMany({_id:{$in:id_array}}) 
          
        //   console.log(deleted)
          
        }
  }); */

    //-----------------------
    /* del2 = await collection
      .find({ user_id: "637606d5884dbdedff0d79f7" })
      .sort({ created_at: -1 })
      .skip(1)
      .project({ _id: 1 });
  console.log(del2.hasNext()); */

    //-------------------------------------------------------

    /* response = await collection
      .aggregate([
        { $match: { user_id: "634ec29cd2ade4255a044fcb" } },
        // { $skip: 1 },
        {
          $group: {
            _id: "$message",
            all: {
              $push: "$$ROOT",
            },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            "all": {
              $cond: {
                if: { $lt: ["$count", 2] },
                then: "$$REMOVE",
                else: "$$ROOT.all.created_at",
              },
            },

            //  all: 1,
            //  count: 1,
            //  qtyGt1: { $gt: [ "$count", 1 ] },
          },
        },
        // { $sort: { created_at: -1 } },
      ])
      .toArray(); */
    //------------------------------------------------------------------------------
    /* response = await collection
      .aggregate([
        { $match: { user_id: "634ec29cd2ade4255a044fcb" } },
        {
          $group: {
            _id: "$message",
            count: { $sum: 1 },
            // items: { $push: "$$ROOT._id" },
          },
        }, */
    /*   {
          $set: {
            status: {
              $cond: {
                if: {
                  $lt: ["$count", 2],
                },
                then: "delete",
                else: "Pass",
              },
            },
          },
        }, */
    /*    ])
      .toArray(); */
  } catch (error) {
    console.log(error);
  }
  // console.log(response);
  /*   response.forEach(async function (obj) {
    if (obj.count > 0) {
      console.log("inif");
      let result2 = await collection
        .find({ message: obj._id })
        .sort({ created_at: -1 })
        .skip(0)
        .map((doc) => {
          return doc._id;
        })
        .toArray();
      console.log(result2);
      // let del=await collection.deleteMany({_id:{$in:result2}})
    }
  }); */

  // let del=await collection.deleteMany({message:item._id})

  // var id_array = response.map(function (el) { return el.all; });
  /*  let data = [];
  response.forEach(function (item) {
    // console.log(item.all);
    data=data.concat(item.all);
  });
  console.log(data);
  let del=await collection.deleteMany({_id:{$in:data}}) */
};
const removeNotifications = async (collection, msg) => {
  let result2 = await collection
    .find({ message: msg })
    .sort({ created_at: -1 })
    .skip(1)
    .map((doc) => {
      return doc._id;
    })
    .toArray();
  console.log(result2);
};

insert();

const deleteNotifications = async (collection, user_id, skip = 0) => {
  let response = await collection
    .aggregate([
      { $match: { user_id: "63a543ede45e4447c9064b59" } },
      // { $match: { user_id: user_id } },
      {
        $sort: {
          created_at: -1,
        },
      },
      {
        $group: {
          _id: "$process_code",
          count: { $sum: 1 },
          items: { $push: "$$ROOT._id" },
        },
      },
    ])
    .toArray();

  //all the notification ids group by process code
  console.log(response);

  console.log("------------");

  let del_ids = [];

  //loop on each types of notifications
  response.forEach(function (obj) {
    let ids_array = obj.items;
    // skip notification that you want to skip
    let arr = ids_array.slice(2);
    if (arr.length > 0) {
      del_ids = del_ids.concat(arr);
    }
  });

  // id that you want to delete from the Notification collection
  console.log(del_ids);

  let deleted = await collection.deleteMany({ _id: { $in: del_ids } });
  console.log(deleted);

  //----------------------------------------------------------------

  /*  let response = await collection
      .aggregate([
        {
          $sort: {
            created_at: -1,
          },
        },
        {
          $group: {
            _id: {
              process_code: "$process_code",
              user_id: "$user_id",
            },
            items: { $push: "$$ROOT._id" },
          },
        },
      ])
      .toArray();
      
    console.log(response);
    console.log("------------");

    let del_ids = [];
    response.forEach(function (obj) {
      let ids_array = obj.items;
      let arr = ids_array.slice(2);
      if (arr.length > 0) {
        console.log(arr);
        console.log("------------");
        del_ids = del_ids.concat(arr);
      }
    });
    console.log(del_ids);
    let deleted=await collection.deleteMany({_id:{$in:del_ids}})
    console.log(deleted); */
};

const test = async (collection) => {
  /*  let response=await collection.aggregate(
    [
      {
        $group:
          {
            _id: "$message",
            minQuantity: { $max: "$shop_id" }
          }
      }
    ]
 ).toArray(); */
  //----------------------------------------------------------------
  /*   let response = await collection
    .aggregate([
      // Stage 1: Filter pizza order documents by pizza size
      {
        $match: { size: "medium" },
      },

      // Stage 2: Group remaining documents by pizza name and calculate total quantity
      {
        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } },
      },
    ])
    .toArray(); */
  console.log(new Date("2020-01-30"));

  let response = await collection
    .aggregate([
      // Stage 1: Filter pizza order documents by date range
      {
        $match: {
          date: {
            $gte: new Date("2020-01-30"),
            $lt: new Date("2022-01-30"),
          },
        },
      },

      // Stage 2: Group remaining documents by date and calculate results
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          totalOrderValue: { $sum: { $multiply: ["$price", "$quantity"] } },
          averageOrderQuantity: { $avg: "$quantity" },
        },
      },

      // Stage 3: Sort documents by totalOrderValue in descending order
      {
        $sort: { totalOrderValue: -1 },
      },
    ])
    .toArray();
  return response;
};

const pushProcessCode = async (collection) => {
  /* let response = await collection
  .aggregate([
    {
      $match: {message : {$regex : "import"}}
    },

   

  
    {
      $project: {
        _id: 1
      }
    },
  ])
  .toArray();
 */
  let processCodeArr = [
    "import",
    "Campaign",
    "updated",
    "uploaded",
    "upload",
    "refined",
  ];
  let bulkArr = [];

  for (var i = 0; i < processCodeArr.length; i++) {
    let process = processCodeArr[i];
    let nRespo = await collection
      .find({
        $and: [
          { message: { $regex: process } },
          { severity: { $ne: "error" } },
        ],
      })
      .project({ _id: 1 })
      .toArray();
    let newArray = [];

    nRespo.map((item) => {
      newArray.push(item._id);
    });
    let processCode;
    if (process == "error") processCode = process;
    if (process == "refined" || process == "import") processCode = "import";
    if (process == "uploaded") processCode = "upload";
    if (process == "updated") processCode = "upload";
    if (process == "upload") processCode = "upload";
    if (process == "Campaign") processCode = "Campaign";
   
    let obj = {
      updateMany: {
        filter: { _id: { $in: newArray } },
        update: { $set: { process_code: processCode } },
      },
    };
    console.log(newArray);
    bulkArr.push(obj);
  }
  
  let errorObj = {
    updateMany: {
      filter: { severity: "error" },
      update: { $set: { process_code: "error" } },
    },
  };
  bulkArr.push(errorObj);
  let updated;
  try {
    updated = await collection.bulkWrite(bulkArr);
  } catch (e) {
    return e;
  }

  console.log(updated);

  // let updated = await collection.updateMany(
  //   { _id: { $in: newArray } },
  //   { $set: { process_code: "abc" } }
  // );
  return updated;

  return nRespo;
  return response;
};

const deleteNoti=async(collection)=>{

  // await client.connect();
  // const collection = client.db('home').collection('notifications');
  // let result;
   try {
      result =await collection
               .aggregate([
                 {
                   $sort: {
                     created_at: -1,
                   },
                 },
                 {
                   $group: {
                     _id: {
                       process_code: "$process_code",
                       user_id: "$user_id",
                     },
                     items: { $push: "$$ROOT._id" },
                   },
                 },
               ])
               .toArray();
   } catch (error) {
     console.log(error);
   }
   console.log("result")
   console.log(result)
   let id_array = [];
 let del_ids = [];
 result.forEach(function (obj) {
   let ids_array = obj.items;
   let arr = ids_array.slice(1);
   if (arr.length > 0) {
     console.log(arr);
     console.log("------------");
     del_ids = del_ids.concat(arr);
   }
 });
//  console.log("del_ids-----------------");
//  return del_ids;

 let deleted=await collection.deleteMany({_id:{$in:del_ids}})
 console.log(deleted);
return deleted;
}


exports.handler = async (event) => {
  console.log('start');
//   return 
     const uri = "mongodb+srv://admin:X0vsCmgBBtS8ic6Z@bwp-meta-testing.ccekx4v.mongodb.net/";
     const client = new MongoClient(uri);
     try {
        await removeNotification(client)
       } finally {
         console.log('close connection');
         client.close();
       }
};

const removeNotification = async(client)=>{
   
    await client.connect();
    const collection = client.db('home').collection('notifications');
    let result;
     try {
        result =await collection
                 .aggregate([
                   {
                     $sort: {
                       created_at: -1,
                     },
                   },
                   {
                     $group: {
                       _id: {
                         process_code: "$process_code",
                         user_id: "$user_id",
                       },
                       items: { $push: "$$ROOT._id" },
                     },
                   },
                 ])
                 .toArray();
     } catch (error) {
       console.log(error);
     }
     console.log("result")
     console.log(result)
   let del_ids = [];
   result.forEach(function (obj) {
     let ids_array = obj.items;
     let arr = ids_array.slice(2);
     if (arr.length > 0) {
       console.log(arr);
       console.log("------------");
       del_ids = del_ids.concat(arr);
     }
   });
   console.log(del_ids);
   let deleted=await collection.deleteMany({_id:{$in:del_ids}})
   console.log(deleted);
 
}
