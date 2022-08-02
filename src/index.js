let text1 
text1 = ""

function button_number(button_value) {
  
    console.log(button_value); // checking argument value by printing here
    let button_value_str = button_value.toString(); 
    text_ele =document.getElementsByClassName("box"); // finding list of element with class box which is text field in calculator
    console.log(text_ele.length);
    
    text1 = text1.concat(button_value_str)
    text_ele[0].innerText = text1;
    
    

    
   
};
var current_operator
current_operator = ""

function button_operator(operator_value){
    if (button_operator == '+') {
        text_ele =document.getElementsByClassName("box");
        number1 =text_ele[0].innerText 
        current_operator = operator_value
       
      }

    

    console.log(operator_value);

};
var result
result = 0
function plus(number1,number2){
result = number1 + number2




}