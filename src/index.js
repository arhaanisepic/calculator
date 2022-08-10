let current_text
current_text = ""
let prev_val = ""
let current_val = ""
let prev_operator = ""
let current_operator = ""
let isNumberPressed
isNumberPressed = false;
let prevKeyNumberPressed = false;

function calculate(fn) {
    return new Function('return ' + fn)();
  }


function button_number(button_value) {
    let button_value_str = button_value.toString(); 
    current_text=get_box_text();
    if (prevKeyNumberPressed){
        current_val = current_text.concat(button_value_str);
    }
    else{
        
        current_val = button_value_str;
    }
    set_box_text(current_val)
    prevKeyNumberPressed = true
}

function button_operator(operator_value) {
    
    current_operator = operator_value
    if (prev_operator == ''){
        prev_operator = current_operator
    }
    if (prev_operator != '' && prev_val == ''){
        prev_val = current_val;
        current_val = '';
        
        
    }
    if ( prev_val != '' && prev_operator == '±' || prev_operator == '%' ){
        result = perform_operation(prev_val,prev_operator,'')
        prev_val =result;
        prev_operator = '';

    }
    else if ( prev_val != '' && current_val != '' && prev_operator != '') {
        result = perform_operation(prev_val,prev_operator,current_val)
        prev_val =result;
        prev_operator = current_operator;
    }
    prevKeyNumberPressed = false
}

function perform_operation(number1,operator,number2){

    if (operator == "+"){
       result = Math.floor(number1) + Math.floor(number2);
    }
    else if (operator == "-"){
        console.log("- result");
        result = Math.floor(number1) - Math.floor(number2);
    }
    else if (operator == "÷"){
        result = Math.floor(number1) / Math.floor(number2);
    }
    else if (operator == "x"){
        result = Math.floor(number1) * Math.floor(number2);
    }
    else if (operator == "%"){
        result = Math.floor(number1) /100;
    }
    else if (operator == "±"){
        result = Math.floor(number1) *-1;
    }
    
    console.log("result:" +result);
    set_box_text(result);

    return result;
    
}

function button_number1(button_value) {
  
     // checking argument value by printing here
    let button_value_str = button_value.toString(); 
    
    console.log(calculate('2+'))
    console.log("number  presssd : " + button_value)
    console.log("current_operator:" +current_operator);
    console.log("pre operator "+ prev_operator);
    current_text=get_box_text();
    if (isNumberPressed){
        current_text = current_text.concat(button_value_str);
    }
    else{
        prev_val = current_text;
        current_text =button_value_str;
        current_val = current_text
        
    }
    console.log("curr text" + current_text);
    if (prev_operator != ''){
        perform_operation(prev_val,current_val)
    }else{
        set_box_text(current_text);
        prev_operator =current_operator;
    }
    
    isNumberPressed=true;
   
};


function get_box_text(){
    text_ele =document.getElementsByClassName("box"); 
    return text_ele[0].innerText
}

function set_box_text(text){
    text_ele =document.getElementsByClassName("box"); 
    text_ele[0].innerText = text;
}
function button_operator1(operator_value){
    console.log("prev_operator:" + prev_operator + "   current_operator:" + current_operator);
    
    if (prev_operator == ""){
        console.log("if loop operator presssd : " + operator_value);
        current_operator = operator_value;
        current_val = get_box_text() ;
        //current_text = ""
        if (operator_value == "%"){
            
            perform_operation(current_val,0);
            prev_operator="";
        }
        if(operator_value == "±"){
           
            perform_operation(current_val,0);
            prev_operator="";
        }
        

        
    }
    else{
       // if (operator_value == "="){
        //prev_val = current_val
        prev_operator= current_operator
        current_operator= operator_value
        current_val = get_box_text() ;
        console.log("else loop operator presssd : " + operator_value);
        console.log("prev_val:" + prev_val + "   current_val:" + current_val);
        console.log("prev_operator:" + prev_operator + "   current_operator:" + current_operator);
        perform_operation(prev_val,current_val);
       
       // }
        
    }
    isNumberPressed=false
};
var result
result = 0
function perform_operation1(number1,number2){

    if (prev_operator == "+"){
       result = Math.floor(number1) + Math.floor(number2);
    }
    else if (prev_operator == "-"){
        console.log("- result");
        result = Math.floor(number1) - Math.floor(number2);
    }
    else if (prev_operator == "÷"){
        result = Math.floor(number1) / Math.floor(number2);
    }
    else if (prev_operator == "x"){
        result = Math.floor(number1) * Math.floor(number2);
    }
    else if (prev_operator == "%"){
        result = Math.floor(number1) /100;
    }
    else if (prev_operator == "±"){
        result = Math.floor(number1) *-1;
    }
    
    console.log("result:" +result);
    
    set_box_text(result);
    prev_operator= current_operator
    prev_val = result
    current_operator = ""
    current_val = ""
    console.log("prev_val:" + prev_val + "   current_val:" + current_val);
    console.log("prev_operator:" + prev_operator + "   current_operator:" + current_operator);

};  
function reset(){
    current_text = ""
    prev_val = ""
    current_val = ""
    prev_operator = ""
    current_operator = ""
    set_box_text(0);

}