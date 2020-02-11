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
// function sumArrayItemsAtIndex(arr1, arr2){
//     let sumArray = [];
//     const longerArray = setOnArrayLength(arr1, arr2);
//     const shorterArray = setOnArrayLength(arr2, arr1);
    
//     sumArray = longerArray.map(function(longerItem, index){
//         if (shorterArray[index] === undefined){
//             return longerItem;
//         }
//         else{
//             return longerItem + shorterArray[index];
//         }
//     })
//     return sumArray;
// }

// function setOnArrayLength(arr1, arr2){
//     if (arr1.length >= arr2.length){
//         console.log(arr1);
//         return arr1;
//     }
//     else {
//         console.log(arr2);
//         return arr2;
//     }
// }

// const array1 = [1,0,2,3,4];
// const array2 = [3,5,6,7,8,13];

// console.log(sumArrayItemsAtIndex(array1,array2));

// 11

// function removeFalsy(arr){
//     let answerArray = [];
//     arr.forEach(function(item){
//         if (item) {
//             answerArray.push(item);
//         }
//     });
//     return answerArray;
// }

// const arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// console.log(removeFalsy(arr));

// 12

// function mergeAndRemoveDups(arr1, arr2){
//     answerArray = arr1;
//     arr2.forEach(function(item, index){
//         if (arr1.includes(item)){

//         }
//         else {
//             answerArray.push(item);
//         }
//     });
//     return answerArray;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [2, 30, 1];
// console.log(mergeAndRemoveDups(arr1, arr2));

//13

// function double(arr){
//     return arr.map(item => item*2);
// }

// const arr = [1,2,3];
// console.log(double(arr));

// 14

// function makeArrayString(arr){
//     return arr.map(item => item.toString());
// }

// console.log(makeArrayString([1,2,3]));

// 15

// function capitalizeNames(arr){
//     return arr.map(item => item = item[0].toUpperCase()  + item.substring(1));
// }

// const arr1 = ['jim', 'joe', 'kira', 'zach']

// console.log(capitalizeNames(arr1));

// 16

function lessThanFive(arr){
    return arr.filter(item => item.length < 5);
}

const arr = ["Sometimes", "I", "give", "myself", "the", "creeps", "Sometimes", "my", "mind","plays", "tricks", "on", "me",
"It", "all", "keeps", "adding", "up",
"I", "think", "I'm", "cracking", "up",
"Am", "I", "just", "paranoid?",];

console.log(lessThanFive(arr));