let text1 
text1 = ""

function button_number(button_value) {
   
   
    console.log(button_value); // checking argument value by printing here
    let button_value_str = button_value.toString(); 
    text_ele =document.getElementsByClassName("box"); // finding list of element with class box which is tex field in calculator
    console.log(text_ele.length);
    text1 = text1.concat(button_value_str)
    text_ele[0].innerText = text1;
    

    
   
};
function button_operator(operator_value){
    

    

    console.log(operator_value);

};

