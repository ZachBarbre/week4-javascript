//1
// function checkIfArray(input){
//     return Array.isArray(input);
// }

// console.log(checkIfArray([1,2,3]));
// console.log(checkIfArray('a'));
// 2
// function getFirstNElements(arr, n){
//     return arr.splice(0, n);
// }

// console.log(getFirstNElements([1,2,3,4,5], 4))

// 3
// function joinArrayToString(arr){
//     return arr.join('');
// }
// console.log(joinArrayToString([1,2,3,4,5]));

// 4
// function insertDashes(num){
//     const stringNum = num.toString();
//     let dashNum = ''
//     for(let i = 0; i < stringNum.length; i++){
//         dashNum += stringNum[i] + '-';
//     }
//     return dashNum.slice(0,dashNum.length-1);
//     }
// console.log(insertDashes(12345));

// 5
// function sortArray(arr){
//     arr.sort(function(a,b){
//         return a - b;
//     })
//     return arr;
// }

// console.log(sortArray([4, -2, 5, 1, 3]));

// 6
// function mostFrequentItem(arr){
    // const uniqueItems = [];
    // arr.forEach(function(item){
        // if (!uniqueItems.includes(item)){
            // uniqueItems.push(item)
        // }
    // })
    // let mostFrequent = null;
    // let mostFrequentCount = 0;
    // uniqueItems.forEach(function(uniqueItem){
        // let count = 0
        // arr.forEach(function(item){
            // if (item === uniqueItem){
                // count += 1; 
            // }
        // })
        // if(mostFrequentCount < count){
            // mostFrequent = uniqueItem;
            // mostFrequentCount = count;
        // }   
    // })
    // return mostFrequent
// }
// 
// function countItems(arr){
    // 
// }
// 
// // console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

// 7

// function switchCase(str){
//     let switchStr = ''
//     for(let i = 0; i < str.length; i++){
//         if (str[i] === str[i].toLowerCase()){
//             switchStr += str[i].toUpperCase();
//         }
//         else {
//             switchStr += str[i].toLowerCase();
//         }
//     }
//     return switchStr
// }
// console.log(switchCase(`The Quick Brown Fox`));

// 8
// function printNestedArray(arr){
//     arr.forEach(function(nestArr){
//         nestArr.forEach(function(item){
//             console.log(item);
//         });
//     });
// }
// const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// printNestedArray(arr);

// 9
// function removeDuplicates (arr){
    // const uniqueItems = [];
    // arr.forEach(function(item){
        // if (!uniqueItems.includes(item)){
            // uniqueItems.push(item)
        // }
    // })
    // return uniqueItems;
// }
// // const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(removeDuplicates(arr1));

// 10
function sumArrayItemsAtIndex(arr1, arr2){
    let sumArray = [];
    const longerArray = setOnArrayLength(arr1, arr2);
    const shorterArray = setOnArrayLength(arr2, arr1);
    
    sumArray = longerArray.map(function(longerItem, index){
        if (shorterArray[index] === undefined){
            return longerItem;
        }
        else{
            return longerItem + shorterArray[index];
        }
    })
    return sumArray;
}

function setOnArrayLength(arr1, arr2){
    if (arr1.length >= arr2.length){
        console.log(arr1);
        return arr1;
    }
    else {
        console.log(arr2);
        return arr2;
    }
}

const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];

console.log(sumArrayItemsAtIndex(array1,array2));