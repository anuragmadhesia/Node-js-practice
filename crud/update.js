const dbConnect = require('../config/mongodb')

const updateData = async ()=>{
    let data = await dbConnect();
    // const result = await data.updateOne(
    //     {name:'AKM'},{
    //         $set:{size:30}
    //     }
    // )
    const result = await data.update(
        {type:'sniper'},{
            $set:{size:5}
        }
    )
    console.log(result);
}

updateData();