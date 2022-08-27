console.log('async-example1');
let a = 5;
let b = 0;

// setTimeout(()=>{
//     console.log('async-example2');
//     b = 10;
// },1000)

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },1000)
})

console.log('async-example3');
waitingData.then((data)=>{
    console.log('async-example2');
    b=data;
    console.log(a + b);
})
console.log(a + b);