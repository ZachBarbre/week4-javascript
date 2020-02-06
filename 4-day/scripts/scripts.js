'use strict';

const makeCreatListButton = document.getElementById('generateList');
const shoppingListInput = document.querySelectorAll('.userInput');
const shoppingListDiv = document.querySelector('#shoppingList');

function generateList(listArray){
    const listUnorderedList = document.createElement('ul');
    listArray.forEach(function(arrayItem){
        const listItem = document.createElement('li');
        listItem.innerHTML = arrayItem;
        listUnorderedList.appendChild(listItem);
    })
    return listUnorderedList
}

function createInputArray(inputNodelist){
    const inputArray = [];
    inputNodelist.forEach(function(list){
        inputArray.push(list.value);
    })
    return inputArray;
}

makeCreatListButton.addEventListener('click', function(event){
    event.preventDefault();
    const listArray = createInputArray(shoppingListInput);
    const theList = generateList(listArray);
    shoppingListDiv.appendChild(theList);
})

