const express = require('express');
require('./config');
const Guns = require('./guns');

const app = express();
app.use(express.json());

app.get('/guns/:key', async (req,res)=>{
    console.log(req.params.key);
    let data = await Guns.find({
        '$or':[
            {'name':{$regex:req.params.key}},
            {'type':{$regex:req.params.key}}
        ]
    })
    res.send(data);
})

app.listen(5000,()=>{
    console.log('App running at http://127.0.0.1:5000/')
})