

const addItem = document.getElementById("add-item");
const getItem = document.getElementById("input-item");
const outputItem = document.getElementById("output");
let error = document.getElementById("error");
let shoppingItems = [];
let listItems = "";


addItem.onclick = item;


function item(e){
    e.preventDefault();
    if(!getItem.value){
        return error.textContent = "Please enter a valid shopping item."
    }else{
        shoppingItems.push(getItem.value); 
        renderItems();
    }           
}

function renderItems(){
    if(!getItem.value){
        return error.textContent = "Please enter a valid shopping item."
    }else{        
    for(let i = 0; i < shoppingItems.length; i += 1){
        listItems += "<li>" + shoppingItems[i] + "</li>"                          
    }    
    error.textContent = "";          
    outputItem.innerHTML = listItems;    
    listItems = "";    
    }       
}

function clearList(){    
    listItems = ""
    outputItem.innerHTML = ""
    shoppingItems = [] 
    renderItems()
    error.textContent = ""     
}

    

