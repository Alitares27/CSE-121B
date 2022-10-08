
/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1,number2){
    let addition = (parseFloat(number1) +parseFloat(number2))
 
// Step 2: In the function, return the sum of the parameters number1 and number2
    return addition
}   
// Step 3: Step 3: Using function declaration, define another function named addNumbers that 
//gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(numb1,numb2){
    var numb1 = parseFloat(document.querySelector('#addend1').value)
    var numb2 = parseFloat(document.querySelector('#addend2').value)
    var addition = add(numb1,numb2);
    return addition
}
// Step 4: Assign the return value to an HTML form element with an ID of sum
function display(){
        var sum = document.querySelector('#sum').value = addNumbers()
    return sum
}    
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
    document.getElementById('addNumbers').addEventListener('click',display)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subst(number21,number22){
    let Subtract  = (parseFloat(number21) - parseFloat(number22))
    return Subtract 
}
function subtractNumbers(numb21,numb22){
    var numb21 = parseFloat(document.querySelector('#minuend').value)
    var numb22 = parseFloat(document.querySelector('#subtrahend').value)
    var Subtract = subst(numb21,numb22);
    return Subtract
}
function display2(){
    var difference = document.querySelector('#difference').value = subtractNumbers()
return difference
}    
    document.getElementById('subtractNumbers').addEventListener('click',display2)
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

function multi(number31,number32){
    let Multiplication   = (parseFloat(number31) * parseFloat(number32))
    return Multiplication  
}
function multiplyNumbers(numb31,numb32){
    var numb31 = parseFloat(document.querySelector('#factor1').value)
    var numb32 = parseFloat(document.querySelector('#factor2').value)
    var multip = multi(numb31,numb32);
    return multip
}
function display3(){
    var product = document.querySelector('#product').value = multiplyNumbers()
    return product
}
document.getElementById('multiplyNumbers').addEventListener('click',display3)
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function div(number41,number42){
    let divided   = (parseFloat(number41) / parseFloat(number42))
    return divided  
}
function divideNumbers(numb41,numb42){
    var numb41 = parseFloat(document.querySelector('#dividend').value)
    var numb42 = parseFloat(document.querySelector('#divisor').value)
    var divid = div(numb41,numb42);
    return divid
}
function display4(){
    var divi = document.querySelector('#quotient').value = divideNumbers()
    return divi
}
document.getElementById('divideNumbers').addEventListener('click',display4)

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;
  
// Step 2: Declare a variable to hold the current year
    //<div id="current_year"></div>

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
date = new Date();
year = date.getFullYear();
document.getElementById("current_year").innerHTML = year;

// Step 4: Assign the current year variable to an HTML form element with an ID of year
    //<div id="current_year"></div>

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
random_number = Math.floor(Math.random() *25)

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = random_number;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
var numbers = Array.from({length: 26}, (x, i) => i);                                                                  
var odds = [];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number % 2 != 0) {
    odds.push(number); 
  }
}
document.getElementById("odds").innerHTML = odds

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
var evens = [];
    for (var i = 1; i < numbers.length; i++) {
    var number = numbers[i];
    if (number % 2 == 0) {
        evens.push(number); 
    }
    }
document.getElementById("evens").innerHTML = evens

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
function reduce_array(total, num) {
    return total + num;
}
const reduce_arr = numbers.reduce(reduce_array)
document.getElementById("sumOfArray").innerHTML = reduce_arr;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const newArr = numbers.map(multiplied_array);
function multiplied_array(num) {
    multi_array = num * 2;
    return multi_array
  }
document.getElementById("multiplied").innerHTML = newArr;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const reduce_map_arr = newArr.reduce(reduce_map_array)
function reduce_map_array(total, multi_array) {
    return total + multi_array;
}
document.getElementById("sumOfMultiplied").innerHTML = reduce_map_arr;