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
            listItems += "<li>" + "<input class='check-box' type='checkbox' />"+ shoppingItems[i] + "<button id='remove-btn' onClick=this.parentElement.remove()>X</button>" + "</li>"             
        }         
        
        error.textContent = "";              
        outputItem.innerHTML = listItems;
        console.log(listItems);
        listItems = "";             
    }
    error.textContent = "";
    //outputItem.innerHTML = listItems      
    getItem.value = "";    
}

/*function removeBtn(){
    //this.parent.remove
    this.style.display='none'

}  */ 

function clearList(){    
    listItems = "";
    outputItem.innerHTML = "";
    shoppingItems = [];    
    error.textContent = "";     
}


    


    

