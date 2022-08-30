const dbConnect = require('../config/mongodb')

const insert = async ()=>{
    let db = await dbConnect();
    // const result = await db.insertOne(
    //     {
    //         name:'Crowbar',
    //         type:'melee',
    //         size:0
    //     }
    // );
    const result = await db.insertMany(
        [
            {
                name:'Crowbar',
                type:'melee',
                size:0
            },
            {
                name:'Pan',
                type:'melee',
                size:0
            }
        ]
    );
    if(result.acknowledged){
        console.log('Data Inserted');
    }
}

insert();