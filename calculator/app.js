// program


const display=document.getElementById('display');


function appendTOdisplay(input){
      display.value+=input;
}
function cleardisplay(){
    display.value="";

}
function backspace(){
    display.value=display.value.slice(0,-1);

}


function Calculate(){
    try{
    display.value =eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

}

