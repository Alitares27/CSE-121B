const table = document.querySelector('temples')
let temples = []
const api = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
fetch(api)
.then(res => res.json())
.then(data => {
    data.forEach(temple => {
        temples =[temple.templeName,temple.location,temple.dedicated,temple.imageUrl]
       console.log(temples)
    });
    })
.catch(err =>console.log(err))
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
temples.sort();
document.getElementById('#templeName').innerHTML=temples;