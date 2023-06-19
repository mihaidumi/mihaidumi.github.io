const addItem = document.getElementById("add-item");
const getItem = document.getElementById("input-item");
const outputItem = document.getElementById("output");
let error = document.getElementById("error");
let shoppingItems = [];

getItem.addEventListener("keydown", function(event){
    if(event.key=="Enter")
    renderItems()    
})

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
        
        localStorage.setItem("key", JSON.stringify(shoppingItems))

        getItem.value=""
        

        

        removeBtn.addEventListener('click', function(){ li.remove() })                                       
    }       
    error.textContent = "";
    
}




