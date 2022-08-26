const fs = require("fs");

const bioData = {
    id:1,
    name:'zahid',
    age:23,
    work:'intern'
};
const jsonData = JSON.stringify(bioData);
const objData = JSON.parse(jsonData);
var log=1;

fss = fs.readFile('data.json','utf-8',(err,data)=>{
    if(data==null || data==''){
        fs.writeFile('data.json','['+jsonData+']',(err)=>{
            console.log('added 1st time');
        })
    }else{
        const orgData=JSON.parse(data);
        orgData.forEach(el => {
            if(objData.id==el.id){log=0;}
        });
        if(log==1){
            tempData = data.slice(0, -1);
            fs.writeFile('data.json',tempData+','+jsonData+']',(err)=>{
                console.log('added');
            })
        }else{
            console.log('id '+objData.id+' already exist');
        }
    }
})