const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='node-practice'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('guns');
  
}
module.exports= dbConnect;