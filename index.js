const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single('file_name');

app.post('/upload',upload,(req,res)=>{
    res.send("File uploaded")
});

app.listen(5000,()=>{
    console.log('App running at http://127.0.0.1:5000/')
})