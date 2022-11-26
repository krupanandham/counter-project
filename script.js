var counterElement=document.getElementById("counterText");

var decrementBtn=document.getElementById("decrement");
var incrementBtn=document.getElementById("increment");
var Resetbtn=document.getElementById("reset");

var counter = counterElement.innerText;

function decrement() {
    if(counter<=-1){
    console.log('Error:cannot go below 0');
    texterror.innerHTML = "<span style='color:red;'>Error : Cannot go below 0 </span>"
    }
    if(counter>=0)
    {
    texterror.innerHTML ="<span style='color:black;'></span>"
    }
    counter--;
    if(counter>=0)
    {
    console.log(counter);
    counterElement.innerText = counter;
    }
   }
   
function increment() {
    counter++;
    console.log(counter);
    counterElement.innerText = counter
   }
   
   function reset() {
    counter = 0;
    console.log(counter);
    counterElement.innerText = counter;
   }

decrementBtn.onclick = decrement;
incrementBtn.onclick = increment;
Resetbtn.onclick = reset;
