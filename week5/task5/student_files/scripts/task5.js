/* Lesson 5 */

/* IF/ELSE /IF */

// Step 1: Declare and initialize a new variable to hold the current date
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
ourDate = (month + "/" + day + "/" + year);

// Step 2: Declare another variable to hold the day of the week
ourDay = ('')
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
ourDay = date.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
message = ('')

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (ourDay >0) {
    message = 'Hang in there!';
    }else if (ourDate<6){
    message = 'Hang in there!';

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
    } else {
        message = 'Woohoo!  It is the weekend!';
    }
    //***********alert(message)
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message_2 = ('')
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (date.getDay()) {
    case 0:
      message_2 = "Sunday";
      break;
    case 1:
      message_2 = "Monday";
      break;
    case 2:
      message_2 = "Tuesday";
      break;
    case 3:
      message_2 = "Wednesday";
      break;
    case 4:
      message_2 = "Thursday";
      break;
    case 5:
      message_2 = "Friday";
      break;
    case  6:
      message_2 = "Saturday";
  }
  
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerHTML =  ourDate;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerHTML =  message_2;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = []; 
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temple){
    return temple
}
// - Creates an HTML <article> element
const itemarticle = document.createElement('article')
itemarticle.id = 'table'
// - Creates an HTML <h3> element and add the temple's templeName property to it
const itemh3 = document.createElement('h3')
itemh3.id = 'templeName'

// - Creates an HTML <h4> element and add the temple's location property to it
const itemh4 = document.createElement('h4')
itemh4.id = 'location'
// - Creates an HTML <h4> element and add the temple's dedicated property to it
const itemh42 = document.createElement('h4')
itemh42.id = 'dedicated'
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
const image = document.createElement('img')
image.id = 'imageUrl'
image.alt = 'templeName'
image.src = ''

// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
itemarticle.append(itemh3,itemh4,itemh42,image)

// - Appends the <article> element to the HTML element with an ID of temples
const templediv = document.querySelector('#temples')
templediv.append(itemarticle)

// Step 3: Create another function called getTemples. Make it an async function.
const getTemples = async() => {
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the execution of the code waits here as well until it finishes.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
    api = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    const data = await api.json();
    let tableBody = ``;
    data.forEach((temple) => {
      temples =[temple.templeName,temple.location,temple.dedicated,temple.imageUrl]  
      tableBody += `<article>
            <h3>${temple.templeName}</h3>
            <h4>${temple.location}</h4>
            <h4>${temple.dedicated}</h4>
            <img src =${temple.imageUrl}>
        </article>`
    });
    document.getElementById('table').innerHTML = tableBody;
}
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
output();
// Step 7: Declare a function named reset that clears all the <article> elements from the HTML element with an ID of temples
const reset =() =>{
    document.getElementById('table').innerHTML = ''
} 
// Step 8: Declare a function named sortBy that does the following:
const sortBy = ()=>{
// - Calls the reset function
    reset()
    let rev = document.getElementById('#table');
let sorted = temples.sort((tem1,tem2)=>{
  if(tem1.templeName > tem2.templeName)
  return 1
  else if (tem1.templeName < tem2.templeName)
  return -1
  else
    return 0
});
sorted.forEach(temp => {
  let newTemples =[temp.templeName,temp.location,temp.dedicated,temp.imageUrl]
    rev.innerHTML +=`<article>
    <h3>${temp.templeName}</h3>
    <h4>${temp.location}</h4>
    <h4>${temp.dedicated}</h4>
    <img src =${temp.imageUrl}>
    </article>`
 
});
};
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
let sortOp = document.getElementById('sortBy');
let option = sortOp.value;
if (option = 'templeNameAscending'){
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
  getTemples()
}else if (option = 'templeNameDescending'){
  sortBy()
};
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
