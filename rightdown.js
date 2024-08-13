let rows = 5;

for (let i = rows; i > 0; i--) {
    let pattern = '';
    
    
    for (let j = 0; j < rows - i; j++) {
        pattern += ' ';
    }
    
   
    for (let k = 0; k < i; k++) {
        pattern += '*';
    }
    
    console.log(pattern);
}
