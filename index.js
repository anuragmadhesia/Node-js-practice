const dbConnect = require('./mongodb')

dbConnect().then((resp)=>{
resp.find({name:'AWM'}).toArray().then((data)=>{
    console.log(data);
})
})

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();