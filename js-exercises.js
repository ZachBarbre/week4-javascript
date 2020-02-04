// function printNumbers(start, end) {
//   let num = start;
//   while (num <= end) {
//       console.log(num);
//       num++
//   }

// }

// printNumbers(1, 10);

// function printSquare(size){
//   for (let height = 0; height < size; height ++){
//     console.log('*'.repeat(size));
//   }
// }

// printSquare(6);

// function printBox(width, height){
//   for (let count = 0; count < height; count++){
//     if (count === 0) {
//       console.log('*'.repeat(width));
//     }
//     else if (count === height - 1){
//       console.log('*'.repeat(width));
//     }
    
//     else console.log('*' + ' '.repeat(width-2) + '*');
//   }
// }

// printBox(6,4);

// function printBanner(input){
//   console.log('*'.repeat(input.length + 4));
//   console.log('* ' + input + ' *');
//   console.log('*'.repeat(input.length + 4)); 
// }

// printBanner('Welcome to DigitalCrafts')

// function factor(num){
//   let factors = []
//   for (let i = 1; i <= num; i++){
//     if (num % i === 0){
//       factors.push(i);
//     }
//   }
//   return factors;
// }

// console.log(factor(20))

// function cipher(message, offset){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let encryptMessage = ''
//   for (let i = 0; i <= message.length - 1; i++){
    
//     if (message[i] === ' ') {
//       encryptMessage += ' '
//     }
//     else {
//       let offsetIndex = (alphabet.indexOf(message[i]) + offset) % 26;
//       if (offsetIndex >= 0){
//         encryptMessage += alphabet[offsetIndex];
//       }
//       else {
//         encryptMessage += alphabet[alphabet.length + offsetIndex];
//       }
      
//     }
    
//   }
//   return encryptMessage
// }

// console.log(cipher('attack at dawn', 5))

// function decipher(message, offset){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let encryptMessage = ''
//   for (let i = 0; i <= message.length - 1; i++){
    
//     if (message[i] === ' ') {
//       encryptMessage += ' '
//     }
//     else {
//       let offsetIndex = (alphabet.indexOf(message[i]) - offset) % 26;
//       console.log(offsetIndex)
//       if (offsetIndex >= 0){
//         encryptMessage += alphabet[offsetIndex];
//       }
//       else {
//         encryptMessage += alphabet[alphabet.length + offsetIndex];
//       }
      
//     }
    
//   }
//   return encryptMessage
// }

// console.log(decipher('fyyfhp fy ifbs', 5))

// function leet(str){
//   const normal = 'AEGIOST';
//   const leets = '4361057';
//   let leetTranslate = '';
//   for (let i = 0; i < str.length; i++){
//     if (normal.includes(str[i].toUpperCase())){
//       leetTranslate += leets[normal.indexOf(str[i].toUpperCase())];    
//     }
//     else {
//       leetTranslate += str[i].toLowerCase();
//     }
//   }
//   return leetTranslate
// }

// console.log(leet('Leet'));

// function longLongVowels(str){
//   let longVowelStr = str[0];
//   let vowels = 'aeiou';
//   for (let i = 1; i < str.length; i++){
//     if (vowels.includes(str[i]) && str[i] === str[i -1]){
//       longVowelStr += str[i].repeat(5);
//     }
//     else {
//       longVowelStr += str[i];
//     }
//   }
//   return longVowelStr
// }

// console.log(longLongVowels('aaron'));

// function sumNumber(arr){
//   let sum = 0
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum
// }

// console.log(sumNumber([1,4,8]));

// function positiveNumbers(arr){
//   positives = [];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//       positives.push(arr[i])
//     }
//   }
//   return positives
// }

// console.log(positiveNumbers([1,3,-3,-2,4]));

function ticTacToe(board){
    return row(board) || column(board) || digaonal(board);
}

function row(board){
    for (let i = 0; i < 3; i++){
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][1] === board[i][2]){
            if (board[i][1] !== null){
                return board[i][1];
            }
        }
    }
    return null;
}

function column(board){
    for (let i = 0; i < 3; i++){
        if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[1][i] === board[2][i]){
            if (board[i][1] !== null){
                return board[1][i];
            }
        }
    }
    return null;
}

function digaonal(board){
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[1][1] === board[2][2]){
        if (board[1][1] !== null){
            console.log(board[1][1])
            return board[1][1];
        }
    }
    if (board[2][0] === board[1][1] && board[2][0] === board[0][2] && board[1][1] === board[0][2]){
        if (board[1][1] !== null){
            return board[1][1];
        }
    }
    return null;
}

console.log(ticTacToe([['O', 'O', 'O'], ['X', null, 'X'], [null, 'X', null]]));






