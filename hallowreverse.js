let rows = 5;

for (let i = rows; i >= 1; i--) {
    let pattern = '';
    
    // Adding leading spaces
    for (let j = 0; j < rows - i; j++) {
        pattern += ' ';
    }
    
    // Adding asterisks and spaces for the hollow part
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1 || i === rows) {
            pattern += '*';
        } else {
            pattern += ' ';
        }
    }
    
    console.log(pattern);
}
