const addItem = document.getElementById("add-item");
const getItem = document.getElementById("input-item");
const outputItem = document.getElementById("output");
let error = document.getElementById("error");
let shoppingItems = [];

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
        /*let li = document.createElement("li")
        li.classList.add("list-item")
        li.innerHTML =  getItem.value 
        outputItem.appendChild(li)
        let removeBtn = document.createElement("button")
        removeBtn.textContent="X"
        removeBtn.classList.add("remove-btn")
        li.appendChild(removeBtn)*/ 
        let listItems = "";          
        for(let i = 0; i < shoppingItems.length; i += 1){        
            listItems += "<li>" + shoppingItems[i] + "<button id='remove-btn' onClick=removeItem()>X</button>" + "</li>"             
    } 
        let button = document.getElementById("remove-btn")
        console.log(button)
        //button.addEventListener("click", removeItem(){

        //})        
        error.textContent = ""              
        outputItem.innerHTML = listItems
        console.log(listItems)          
    }
    error.textContent = ""    
    getItem.value = ""          
}

function removeBtn(){
    console.log("hello")
}

function clearList(){    
    listItems = ""
    outputItem.innerHTML = ""
    shoppingItems = []    
    error.textContent = ""     
}

    


    

