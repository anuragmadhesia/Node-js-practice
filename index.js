const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-practice');
const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: Number
});

const saveInDB = async () => {
    const Product = mongoose.model('guns', productSchema);
    let data = new Product({
        name: "God gun",
        type: 'gods weapon',
        size: 200
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('guns', productSchema);
    let data =await  Product.updateOne(
        { name: "God gun" },
        {
            $set: { size: 550,name:'Brahmastra' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('guns', productSchema);
    let data = await Product.deleteOne({name:'Brahmastra'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('guns', productSchema);
    let data = await Product.find()
    // let data = await Product.find({name:'AKM'})
    console.log(data);
}

findInDB();
