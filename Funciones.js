const btn1 = document.querySelectorAll('.btn-num');

let statusBox = document.querySelector('#statusBox') ;

let input1 = document.querySelector('#valor1') ;

let input2 = document.querySelector('#valor2') ;

btn1.forEach( element => {

    element.addEventListener( "click", function(  ){

        if( statusBox.value == 0 ){
            input1.value = input1.value + element.value ;
        } 
        else {
            // setear la caja
           input2.value = input2.value + element.value
        }        

    }) ;

});

let btnClear = document.querySelector('.clear');

btnClear.addEventListener('click', () => {

    lv1.innerHTML = "Enter a number:"

    if( statusBox.value == 0 ){
        
        input1.value = ""

    } 
    else {

        input1.value = "" 
        statusBox.value = 0
        input2.value = ""
    
    } 

    input1.classList.add('reference')
    input2.classList.remove('reference')

});

let btnEnter = document.querySelector('.enter');

btnEnter.addEventListener('click', () => {
   
    statusBox.value = 1

    input1.classList.remove('reference')
    input2.classList.add('reference')

});

let operation = document.querySelector('#operators');

let btnCalculate = document.querySelector('.calculate')

const lv1 = document.querySelector('#lv1')

btnCalculate.addEventListener('click', () => {

    lv1.innerHTML = "Result ="

    if (operation.value == "suma"){
        input1.value = parseInt(input1.value) + parseInt(input2.value)
        input2.value =""
    }
    if (operation.value == "resta") {
        input1.value = input1.value - input2.value
        input2.value =""
    }
    if (operation.value == "multiplicación") {
        input1.value = input1.value * input2.value
        input2.value =""
    }
    if (operation.value == "división"){
        input1.value = input1.value / input2.value
        input2.value =""
    }

}); 