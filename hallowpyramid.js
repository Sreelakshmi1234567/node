let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    
    
    for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
    }
    
    
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1 || i === rows) {
            pattern += '*';
        } else {
            pattern += ' ';
        }
    }
    
    console.log(pattern);
}
