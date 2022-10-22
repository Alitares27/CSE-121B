respuesta = document.getElementById('offer');
const codeip = document.getElementById('code');
//const productip = document.getElementById('product');
const price = document.getElementById('price');
const formDetail = document.getElementById('formDetail')

function fetchItems(id){
  fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then(data => createData(data))
}
codeip.onchange=()=>{
fetchItems(codeip.value)};

function createData(items){
  const product = document.querySelector('#product');
  product.textContent = items.name;
  const price = document.getElementById('price');
  price.textContent =parseFloat(items.base_experience)
  console.log(items.name)
  console.log(items.base_stat)
}