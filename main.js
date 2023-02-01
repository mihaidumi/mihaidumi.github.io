
    const inputs =["rock", "paper", "sccisors"]    
    
    function checkWinner(){        

        let option1 = document.getElementById("input-option1").value;
        let option2 = document.getElementById("input-option2").value;


        for(let i = 0; i<=inputs.length; i++){
            if(!option1[i] || !option2[i]) {
                return document.getElementById("result").innerHTML="Please enter rock, paper or sccisors"
            }
        }
        

        if (option1.length == 0 || option2.length == 0) {
            return document.getElementById("result").innerHTML="Please enter rock, paper or sccisors"           
        }
        
        if(option1 === option2) {
            return document.getElementById("result").innerHTML="Tie game"
        }else if(option1 === "rock" && option2 === "paper") {
            document.getElementById("result").innerHTML=`${option2.toUpperCase()} wins` 
        }else if(option1 === "rock" && option2 === "sccisors" ){
            document.getElementById("result").innerHTML=`${option1.toUpperCase()} wins`
        }else if(option1 === "sccisors" && option2 === "rock"){
            document.getElementById("result").innerHTML=`${option2.toUpperCase()} wins`
        }else if(option1 === "sccisors" && option2 === "paper"){
            document.getElementById("result").innerHTML=`${option1.toUpperCase()} wins`
        }else if(option1 === "paper" && option2 === "rock"){
            document.getElementById("result").innerHTML=`${option1.toUpperCase()} wins`
        }else if(option1 === "paper" && option2 === "sccisors"){
            document.getElementById("result").innerHTML=`${option2.toUpperCase()} wins`;
        }            

    }
    
    
    
    
    
    
    
             
             
             
            
            
        
    

    



