const dbConnect = require('../config/mongodb')

dbConnect().then((resp)=>{
// resp.find({name:'AKM'}).toArray().then((data)=>{
//     console.log(data);
// })
resp.find().toArray().then((data)=>{
    console.log(data);
})
})

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();