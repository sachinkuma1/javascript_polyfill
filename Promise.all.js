 function promiseapi(){
    const pr= new Promise(function(resolve, reject){
        setTimeout(()=>resolve("resolved1"), 3000)
    })
    return pr;
}
function promiseapii(){
    const pr= new Promise(function(resolve, reject){
        setTimeout(()=>resolve("resolved2"), 1000)
    })
    return pr;
}

function promiseAll(promises){
      const result=[];
      var count=0;
      const dummy= new Promise(function(resolve, reject){
        promises.forEach((promise,index)=>{
            promise.then(function(value){
                  result[index]=value;
                  count++;
                  if(count==promises.length-1){
                    resolve(result);
                  }
            })
            .catch(function(value){
                reject(value);
            })
        })
      })

      return dummy;
}


Promise.all([promiseapi(), promiseapii()]).then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log("inside catch") 
    console.error(err);
})