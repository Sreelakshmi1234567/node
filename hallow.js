let n=5
let x=""
for(let i=0;i<n;i++){
      
 if(i==0 || i==n-1){
            for(j=0;j<n;j++){
             x =x+"*"
            }
           
        }
        else{
            x ="*"
            for( let j=1;j<n-1;j++){
            x=x+" "
            }
             x=x+"*"
        }
       
    
console.log(x);
x=""

}