let rows=5
for(let i=1;i<=rows;i++){
    pattern =' '
    for(j=1;j<=i;j++){
        if(j==1||j==i||i==rows){
            pattern +='*'
        }
        else{
            pattern +=' '
        }

    }
    console.log(pattern);
    
}
