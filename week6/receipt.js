
const Sells = [];

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
toDay = (month + "/" + day + "/" + year);
current_date = document.getElementById('current_date')
current_date.innerHTML = toDay;

numbers = 1;
numeration = document.getElementById('numeration')
numeration.innerHTML = 'N° '+'T01 - '+' 000' + (numbers);

var idin = document.getElementById('idin');
var namein = document.getElementById('namein');
var addressin = document.getElementById('addressin');
const Welcome = document.getElementById('welcome')

const clients =[];
function addClient(){
  clients.push({idin:idin.value,
              namein:namein.value,
              addressin:addressin.value,
            });
              Welcome.innerHTML = 'Welcome ' + namein.value       
};
const codeip = document.getElementById('code');
const qttip = document.getElementById('qtt');
const productip = document.getElementById('product');
const priceip = document.getElementById('price');
const subtip = document.getElementById('subt');
const tableBody = document.getElementById('tableBody')
var subtotalip = qttip * priceip
subtip.innerHTML = subtotalip;
let products = [];
const productlb = document.querySelector('#product');
const price = document.getElementById('price');
const price2 = document.getElementById('price');

function fetchItems(id){
  fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then(data => createData(data))
}
codeip.onchange=()=>{
fetchItems(codeip.value)};

function createData(items){
  productlb.textContent = items.name;
  price.value =parseFloat(items.base_experience)
  price.textContent =items.base_experience
  console.log(items.name)
  console.log(items.base_experience)
}

const current_sell = [];
function addData(){
  current_sell.push({
                    code:codeip.value,qtt:qttip.value,product:productlb.textContent,price:(parseFloat(priceip.value)),subtotal:(parseFloat(subtip.value))});
  products.push({code:codeip.value,product:productlb.textContent,price:price.value,})   
         
};
const drawing =()=>{
  tableBody.innerHTML = ''
  current_sell.forEach((detail)=>{
    let row = document.createElement('tr');
    row.innerHTML = `<td>${detail.code}</td>
                      <br>
                    <td>${detail.qtt}</td>
                    <br>
                    <td>${detail.product}</td>
                    <br>
                    <td>${detail.price}</td>
                    <br>
                    <td type = "number">${detail.subtotal}</td>`;
    let btdelete = document.createElement('td');
    let btndel = document.createElement('button');
    btndel.classList.add('btn','btn-danger');
    btndel.innerText = 'Delete';
    row.appendChild(btdelete);
    tableBody.appendChild(row)
  });
};

function addSell(){
  Sells.push({Num:numbers,
    Date:toDay,
    Id:idin.value,
    Name:namein.value,
    Address:addressin.value,
    code:codeip.value,
    product:productlb.textContent,
    qtt:qttip.value,
    price:(parseFloat(priceip.value)),
    subtotal:subtip.value})
}

const calc =()=>{
  const qtty = +qttip.value;
  const pricey = +priceip.value;
  const total = qtty * pricey;
  subtip.value = total.toFixed(2);
};
priceip.onchange=()=>{
  calc()
};
qttip.onchange=()=>{
  calc()
};
function addProduct(){
  addData();
  drawing();
  addClient();
  totalReceipt();
  addSell();
  clear()
  msg()
};

function clear(){
  codeip.value='', 
  qttip.value='', 
  productlb.textContent='',
  priceip.textContent='',
  subtip.value='',
  codeip.focus()
}
const save = document.getElementById('save');
const clientLG = document.getElementById('clientLG')
  function saveRecord(){
    tick()
    localStorage.setItem('Clients',JSON.stringify(clients));
    localStorage.setItem('Products',JSON.stringify(products));
    localStorage.setItem('Current_sell',JSON.stringify(current_sell));
    localStorage.setItem('Sells',JSON.stringify(Sells));
    idin.value='';
    namein.value='';
    addressin.value='';
    code.value='';
    qtt.value='';
    productlb.textContent='';
    price.value='';
    subt.value='';
    tableBody.innerHTML = '';
    subtotalIn.value=0;
    taxesIn.value=0;
    totalIn.value=0;
    offer.innerHTML='';
    Welcome.innerHTML=''
    alert('Save it')
    alert('Welcome to EReceipt Module')
  };
  function tick(){
    numbers +=1;
    numeration.innerHTML = 'N° '+'T01 - '+' 000' + (numbers); 
  }
const subtotalIn = document.getElementById('subtotalIn');
const taxesIn = document.getElementById('taxesIn');
const totalIn = document.getElementById('totalIn');

var addTotal = parseFloat();
addTotal = current_sell.map(item => item.subtotal).reduce((prev,curr)=>prev + curr,0);
var sbtotal = parseFloat();

const totalReceipt =()=>{
  sbtotal = current_sell.map(item => item.subtotal).reduce((prev,curr)=>prev + curr,0);
  subtotalIn.value = parseFloat(sbtotal).toFixed(2);
  const tax = 0.18
  const ttax = parseFloat(subtotalIn.value) * tax;
  taxesIn.value = parseFloat(ttax).toFixed(2);
  totalIn.value = parseFloat(sbtotal + ttax).toFixed(2);

};


const msgOffer = 'you have a discount ticket of 20% on your next purchase :)';
const msgWOffer = 'we hope to see you soon :)'
const offer = document.querySelector('#offer');

subtotalIn.onchange=()=>{
  totalReceipt()
};
const msg=()=>{
  if (totalIn.value >=1000){
    offer.innerHTML=msgOffer;
  }else{
    offer.innerHTML=msgWOffer;
  };
}



