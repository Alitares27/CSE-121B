/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
my_name = 'Aldair Payehuanca'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = my_name

// Step 3: declare and instantiate a variable to hold the current year
current_year = 2022
// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerText = current_year

// Step 5: declare and instantiate a variable to hold the name of your picture
my_picture = ('images/me.jpg')

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src',my_picture)

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var my_favorite_foods = ["Orange Juice", " mom's food", " burgers"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerText = my_favorite_foods

// Step 3: declare and instantiate a variable to hold another favorite food
my_food_2 = (" Aji de Gallina", " lemonade");

// Step 4: add the variable holding another favorite food to the favorite food array
my_favorite_foods.push(" Aji de Gallina", " lemonade");

// Step 5: repeat Step 2
document.querySelector('#food').innerText = my_favorite_foods

// Step 6: remove the first element in the favorite foods array
my_favorite_foods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = my_favorite_foods

// Step 8: remove the last element in the favorite foods array
my_favorite_foods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = my_favorite_foods