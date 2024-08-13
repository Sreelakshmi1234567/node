

let prompt=require('prompt-sync')()
let num=prompt()

if (num>0){
    console.log("the number is positive")
}
else if(num<0){
    console.log("the mnumber is negative")

}
else{
    console.log("the number is zero")
}