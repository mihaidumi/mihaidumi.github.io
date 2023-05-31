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
        listItems = "";
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
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.classList.add("check-box")
        li.appendChild(input)                
        let removeBtn = document.createElement("button")
        removeBtn.textContent="X"
        removeBtn.classList.add("remove-btn")
        li.appendChild(removeBtn)
        console.log(shoppingItems)
        
        localStorage.setItem("key", JSON.stringify(shoppingItems))
        

        //console.log(removeBtn);

        removeBtn.addEventListener('click', function(){ li.remove() })

        /*let listItems = "";                  
        for(let i = 0; i < shoppingItems.length; i += 1){                       
            listItems +=
             `<li id ="li">
                <input class='check-box' type='checkbox' /> 
                ${shoppingItems[i]} 
                <button id='remove-btn' onclick=removeItem()>X</button>
            </li>`                              
       }           
        error.textContent = "";              
        outputItem.innerHTML = listItems;*/                               
    }       
    error.textContent = "";
    //outputItem.innerHTML = listItems      
    //getItem.value = "";    
}

/*function removeItem(){    
    //console.log("helo")
    //let btn = document.getElementById("remove-btn")
    //let li = document.getElementById("li")
    //li.remove()    
    //shoppingItems = []; 
    //renderItems() 
    alert(1)  
}*/

function saveItems(){      
    let itemsFromLocalStorage = JSON.parse(localStorage.getItem("key"))
    if(itemsFromLocalStorage){        
        renderItems()         
    }    
}

function clearList(){    
    listItems = "";
    outputItem.innerHTML = "";
    shoppingItems = [];    
    error.textContent = ""; 
    localStorage.removeItem("key")    
}
    

