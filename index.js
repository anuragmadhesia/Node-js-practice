const express = require('express');
require('./config');
const Guns = require('./guns');

const app = express();
app.use(express.json());

app.get('/', async (req,res)=>{
    let data = await Guns.find()
    res.send(data);
})

app.delete('/delete/:_id', async (req,res)=>{
    console.log(req.params);
    let data = await Guns.deleteOne(req.params);
    res.send('done');
})

app.put('/update/:_id', async (req,res)=>{
    console.log(req.params);
    let data = await Guns.updateOne(
        //{}Condtions
        //{$set updated data}
        req.params,
        {
            $set:req.body
        }
    );
    res.send('done');
})

app.post('/create', async (req,res)=>{
    let data = new Guns(req.body);
    const result = await data.save();
    res.send(result);
})

app.listen(5000,()=>{
    console.log('App running at http://127.0.0.1:5000/')
})