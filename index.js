

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
                39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]

const myBtn1 = document.getElementById("myBtn1")
const myBtn2 = document.getElementById("myBtn2")
const myBtn3 = document.getElementById("myBtn3")
const myBtn4 = document.getElementById("myBtn4")
const myBtn5 = document.getElementById("myBtn5")
const myBtn6 = document.getElementById("myBtn6")

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let num5 = document.getElementById("num5")
let num6 = document.getElementById("num6");

/*function generateNumber(){    
    num1.textContent = numbers[(Math.floor(Math.random() * (numbers.length)))];  

    num2.textContent = numbers[(Math.floor(Math.random() * (numbers.length)))];
    
}*/

let arr=[];
console.log(arr)
myBtn1.onclick = function(){
    while(arr.length<6){
        let r = Math.floor(Math.random()*49)+1;
        if(arr.indexOf(r)===-1) arr.push(r);
    }
    num1.textContent=arr[0];
    num2.textContent=arr[1];
    num3.textContent=arr[2];
    num4.textContent=arr[3];
    num5.textContent=arr[4];
    num6.textContent=arr[5];
}
console.log(arr)

function reset(){ 
    location.reload();   
    num1.textContent="0";
    num2.textContent="0";
    num3.textContent="0";
    num4.textContent="0";
    num5.textContent="0";
    num6.textContent="0";
    let arr=[];
    console.log(arr)    
}
console.log(arr)

/*function generateNumber(){
    randomNum = Math.floor(Math.random()*49)+1;           
}*/

/*myBtn1.onclick = function(){
    randomNum = Math.floor(Math.random()*49)+1;    
    num1.textContent = randomNum;   
}

myBtn2.onclick = function(){
    randomNum = Math.floor(Math.random()*49)+1;    
    num2.textContent=randomNum;       
}

myBtn3.onclick = function(){
    randomNum = Math.floor(Math.random()*49)+1;    
    num3.textContent=randomNum;
}

myBtn4.onclick = function(){
    randomNum = Math.floor(Math.random()*49)+1;    
    num4.textContent=randomNum;
}

myBtn5.onclick = function(){
    randomNum = Math.floor(Math.random()*49)+1;    
    num5.textContent=randomNum;
}

myBtn6.onclick = function(){
    randomNum = Math.floor(Math.random()*49)+1;    
    num6.textContent=randomNum;
}*/


          







