var displaydata = document.getElementById("displaydata");

function calculate(){
    var cal = eval(displaydata.value); 
    displaydata.value = cal; 
  
}

function appendData(number){
    displaydata.value += number;
}  

function Clear(){
    displaydata.value = "";
}