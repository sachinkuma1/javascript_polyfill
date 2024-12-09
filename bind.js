const Name={name:"sachin"}
function printname(hometown, state, country){
    console.log(this.name, " ",hometown, " ", state, " ", country);
}

Function.prototype.mybind=function (...args){
    const fun=this;
    const params=args.slice(1);
    return function(...args2){
        fun.apply(args[0],[...params,...args2] )
    }
}

let myfunction=printname.mybind(Name, "gaya", "bihar")
myfunction("india");