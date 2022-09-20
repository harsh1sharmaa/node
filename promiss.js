let a=10;
let b=0;
console.log(a);

// setTimeout(()=>{
//     b=20;
// },2000)

const waitingData=new Promise((resolve, reject) =>{
    setTimeout(()=>{
    resolve(20);
    },2000)

})
waitingData.then((resolvedata)=>{

 b=resolvedata
 console.log(a+b);
})
