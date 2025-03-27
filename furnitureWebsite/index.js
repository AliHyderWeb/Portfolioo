$(document).ready(function(){
    $(function () {
        $.scrollUp({
            scrollSpeed: 500,
            scrollImg: true
        });
    });

   
});

//for buttons
const ancr = document.querySelector('.ancrs');

function showmenu(){
    ancr.style.left = "0";
}
function hidemenu(){
    ancr.style.left = "-200px";
}

//for calculater....
const display = document.getElementById('display');

function buttonFunction(input){
    display.value += input;
}

function clearFunction(){
    display.value = " ";
}

function equalFunction(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error"
    }

}
