let rows = 5;

for (let i = 1; i <=rows ; i++) {
    let pattern = '';
    
    // Adding leading spaces
    for (let j = 0; j < rows - i; j++) {
        pattern += ' ';
    }
    
    // Adding asterisks
    for (let k = 0; k < i; k++) {
        pattern += '*';
    }
    
    console.log(pattern);
}
