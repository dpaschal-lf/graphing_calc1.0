var number_array=['',''];
var entry_array=[];
var number_index=0;
var operator='';
var error='';
var result=null;
var valid_operators=['+','-','/','*'];

function add_numbers(num1, num2){
    return num1+num2;
}
function subtract_numbers(num1, num2){
    return num1-num2;
}
function multiply_numbers(num1, num2){
    return num1*num2;
}
function divide_numbers(num1, num2){
    if(num2!=0){
        return num1/num2;
    }
    else{
        error='Cannot divide by 0!';
        return false;
    }
}
function process_equation(){
    var num_index = 0;
    for(var i = 0; i < entry_array.length; i++){
        if(!isNaN(parseFloat(entry_array[i]))){
            number_array[num_index]=entry_array[i];
            console.log("found a number, index "+num_index+"="+entry_array[i]);
            console.log(number_array);
            if(num_index==1 && operator!=null){
                console.log("calling calculate");
                calculate();
                num_index=0;
            }
        }
        else if(valid_operators.indexOf(entry_array[i])!==-1){ 
            if(num_index==0 && result!=null){
                console.log("hit operator with no preceding number, taking result "+result+" into slot 0");
                number_array[0]=result;
                
                console.log(number_array);
            }
            console.log("found an operator, index: "+num_index+" val "+entry_array[i]);
            console.log(number_array);
            operator=entry_array[i];
            num_index++;

        }
        else{
            alert("something went wrong");
        }
    }
}
function calculate(){

    switch(operator){
            case '+':
                result = add_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
                break;
            case '-':
                result = subtract_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
                break;
            case '*':
                result = multiply_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
                break;
            case '/':
                result = divide_numbers(parseInt(number_array[0]), parseInt(number_array[1]));
                break;
    }
    operator = null;
    number_array=['',''];
    number_index=0;
    document.querySelector('#result').value=result;
    //reset_calculator();


}
function reset_calculator(){
    document.querySelector('#input').value='';
    number_array=['',''];
    number_index=0;       
}

function add_number(digit){
    if(typeof entry_array[number_index]=='undefined'){
        entry_array[number_index]='';
    }
    if(result!==null){
        result=null;
        document.querySelector('#result').value='';
    }
    document.querySelector('#input').value+=digit;
    //number_array[number_index]+=digit;
    entry_array[number_index]+=digit;
}
function add_operator(input_operator)
{
    document.querySelector('#input').value+=input_operator;
    
    //operator = input_operator;
    number_index++;
    entry_array[number_index]=input_operator;
    number_index++;
    
}