const dbConnect = require('./mongodb')

const insert = async ()=>{
    let db = await dbConnect();
    const result = await db.insert(
        [
            {
                name:'kar 98',
                type:'sniper',
                size:5
            },
            {
                name:'M24',
                type:'sniper',
                size:7
            }
        ]
    );
    if(result.acknowledged){
        console.log('Data Inserted');
    }
}

insert();