

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
        return error.textContent = "You must write something."
    }else{
        shoppingItems.push(getItem.value); 
        renderItems();
    }           
}

function renderItems(){    
    if(!getItem.value){
        return error.textContent = "You must write something."
    }else{  
        let li = document.createElement("li")
        li.classList.add("list-item")
        li.innerHTML =  getItem.value 
        outputItem.appendChild(li)
        let removeBtn = document.createElement("button")
        removeBtn.textContent="X"
        removeBtn.classList.add("remove-btn")
        li.appendChild(removeBtn)            
    //for(let i = 0; i < shoppingItems.length; i += 1){        
        //listItems += li + shoppingItems[i] + "<button id='remove-btn' onClick=removeItem()>X</button>"             
    //}         
        error.textContent = ""              
        //outputItem.innerHTML = listItems
        console.log(listItems)   
        listItems = "";    
    }
    error.textContent = "" 
    getItem.value = ""  
         
}

function removeItem(e){
    console.log(e.target)
    
}

function boughtItem(){
    listItems.style.textDecoration = "line-through";
}

function clearList(){    
    listItems = ""
    outputItem.innerHTML = ""
    shoppingItems = []    
    error.textContent = ""     
}

    

