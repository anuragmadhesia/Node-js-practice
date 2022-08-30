const dbConnect = require('../config/mongodb')

const deleteData = async ()=>{
    let data = await dbConnect();
    // const result = await data.deleteOne({name:'M24'});
    const result = await data.deleteMany({type:'sniper'});
    if(result.acknowledged){
        console.log('Data deleted');
    }
}

deleteData();