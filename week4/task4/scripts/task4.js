/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const about_me = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
        name: "Aldair Payehuanca",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
        photo: "images/me.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
        favoriteFoods:[
                {
                fr:"Orange Juice", 
                sc: " mom's food", 
                tr:" burgers",
                }],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
        hobbies: [{
                fr:"Draw", 
                sc:"Paint",
                tr:"Running"}],
// Step 6: Add another property named placesLived with a value of an empty array
        placesLived: [
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
                {
                        Id:1,
                        place:"Arequipa",
                        length:"288",
                },
                {
                        Id: 2,
                        place:"Buenos Aires",
                        length:"11",
                },
                {
                        Id:3,
                        place:"Rosario",
                        length:"13",
                },
        ],        
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = about_me.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute('src',about_me.photo);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
function renderFoods(favoriteFoods){
        const food = favoriteFoods.map(
                (favoriteFoods) => `<ul>
                <li>${favoriteFoods.fr}</li>
                <li>${favoriteFoods.sc}</li>
                <li>${favoriteFoods.tr}</li></ul>`
                );
                document.querySelector("#favorite-foods").innerHTML = food.join("");
}
renderFoods(about_me.favoriteFoods);

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
function renderHobbies(hobbies){
        const hobbie = hobbies.map(
                (hobbies) => `<ul>
                <li>${hobbies.fr}</li>
                <li>${hobbies.sc}</li>
                <li>${ hobbies.tr}</li></ul>`
                );
                document.querySelector("#hobbies").innerHTML = hobbie.join("");
}
renderHobbies(about_me.hobbies);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
function renderPlace(placesLived){
        const place = placesLived.map(
                (placesLived) => `<dl>
                <dt>${placesLived.place}</dt>
                <dd>${placesLived.length + ' months'}</dd></dl>`
        )
document.querySelector('#places-lived').innerHTML = place.join('') ;
}
renderPlace(about_me.placesLived)
