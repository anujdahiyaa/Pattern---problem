#!/usr/bin/env node

// Pascal's Triangle
function printPascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        // Add leading spaces
        row += ' '.repeat((rows - i - 1) * 2);
        
        // Calculate and add numbers
        let num = 1;
        for (let j = 0; j <= i; j++) {
            row += num + ' ';
            num = num * (i - j) / (j + 1);
        }
        console.log(row);
    }
}

// Spiral Matrix (Clockwise)
function printSpiralMatrix(size) {
    let matrix = Array(size).fill().map(() => Array(size).fill(0));
    let num = 1;
    let top = 0, bottom = size - 1, left = 0, right = size - 1;
    
    while (top <= bottom && left <= right) {
        // Fill top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        
        // Fill right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        
        // Fill bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }
        
        // Fill left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }
    
    // Print matrix
    matrix.forEach(row => console.log(row.join(' ')));
}

// Hollow Diamond Pattern
function printHollowDiamond(rows) {
    // Upper half
    for (let i = 1; i <= rows; i++) {
        let row = '';
        // Leading spaces
        row += ' '.repeat(rows - i);
        
        // Stars and spaces
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
    
    // Lower half
    for (let i = rows - 1; i >= 1; i--) {
        let row = '';
        // Leading spaces
        row += ' '.repeat(rows - i);
        
        // Stars and spaces
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

// Alphabet Hourglass
function printAlphabetHourglass(rows) {
    // Upper half
    for (let i = rows; i >= 1; i--) {
        let row = '';
        // Leading spaces
        row += ' '.repeat(rows - i);
        
        // Left ascending
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(64 + j);
        }
        
        // Right descending
        for (let j = i - 1; j >= 1; j--) {
            row += String.fromCharCode(64 + j);
        }
        console.log(row);
    }
    
    // Lower half
    for (let i = 2; i <= rows; i++) {
        let row = '';
        // Leading spaces
        row += ' '.repeat(rows - i);
        
        // Left ascending
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(64 + j);
        }
        
        // Right descending
        for (let j = i - 1; j >= 1; j--) {
            row += String.fromCharCode(64 + j);
        }
        console.log(row);
    }
}

// Character Pyramid
function printCharacterPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        // Leading spaces
        row += ' '.repeat(rows - i);
        
        // Left ascending
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(64 + j);
        }
        
        // Right descending
        for (let j = i - 1; j >= 1; j--) {
            row += String.fromCharCode(64 + j);
        }
        console.log(row);
    }
}

// Test the functions
console.log("Pascal's Triangle:");
printPascalsTriangle(5);
console.log("\nSpiral Matrix:");
printSpiralMatrix(3);
console.log("\nHollow Diamond:");
printHollowDiamond(5);
console.log("\nAlphabet Hourglass:");
printAlphabetHourglass(5);
console.log("\nCharacter Pyramid:");
printCharacterPyramid(5);