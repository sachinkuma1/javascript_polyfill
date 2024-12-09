function promiseapi(){
    const pr= new Promise(function(resolve, reject){
        resolve("resolved1")
    })
    return pr;
}
function promiseapii(){
    const pr= new Promise(function(resolve, reject){
        reject("resolved1")
    })
    return pr;
}

function PromiseAllSettled(promises){
    const arr=[];
     const dummy= new Promise(functin(resolve, reject){
          promises.forEach((promise, index)=>{
            promise.then(function(value){
                arr[index]=value;
            })
            .catch(function(err){
                arr[index]=err;
            })
            resolve(arr);
          })

 
    })

    return dummy;
}

PromiseAllSettled([promiseapi(), promiseapii()]).then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log("inside catch") 
    console.error(err);
})