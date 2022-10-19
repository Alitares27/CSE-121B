//alert('Welcome to EReceipt Module')
//alert('Record the Transaction')
const products = [];

const Sells = [{Num:0,
  date:'',
  idin:0,
  namein:'',
  addressin:'',
  code:'',
  qtt:0,
  unity:'',
  product:'',
  price:0,
  subtotal:0}];

const current_sell = [];
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
toDay = (month + "/" + day + "/" + year);
numeration = document.getElementById('numeration')
numbers = +1;
numeration.innerHTML = 'N° '+'T001-'+'000' + numbers;
current_date = document.getElementById('current_date')
current_date.innerHTML = toDay;
///////////////////////////////////
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
              Welcome.innerHTML = 'Welcome' + namein.value  
              idin.value ='',
              namein.value='',
              addressin.value=''  
                 
};

////////////////////////////////
const codeip = document.getElementById('code');
const qttip = document.getElementById('qtt');
const unityip = document.getElementById('unity');
const productip = document.getElementById('product');
const priceip = document.getElementById('price');
const subtip = document.getElementById('subt');
const tableBody = document.getElementById('tableBody')
var subtotalip = qttip * priceip
subtip.innerHTML = subtotalip;

function addData(){
  current_sell.push({
                     num:numbers.value, code:codeip.value,qtt:qttip.value,unity:unityip.value,product:productip.value,price:priceip.value,subtotal:subtip.value});
  products.push({code:codeip.value,unity:unityip.value,product:productip.value,price:priceip.value,})
  codeip.value='', 
  qttip.value='', 
  unityip.value='',
  productip.value='',
  priceip.value='',
  subtip.value='',
  codeip.focus()
                    };

const drawing =()=>{
  tableBody.innerHTML = ''
  current_sell.forEach((detail)=>{
    let row = document.createElement('tr');
    row.innerHTML = `<td>${detail.code}</td>
                    <td>${detail.qtt}</td>
                    <td>${detail.unity}</td>
                    <td>${detail.product}</td>
                    <td>${detail.price}</td>
                    <td>${detail.subtotal}</td>`;
    let btdelete = document.createElement('td');
    let btndel = document.createElement('button');
    btndel.classList.add('btn','btn-danger');
    btndel.innerText = 'Delete';
    btdelete.appendChild(btndel)
    row.appendChild(btdelete);
    tableBody.appendChild(row)
  });
};

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
  addClient.innerHTML = ''
};
const save = document.getElementById('save');
const clientLG = document.getElementById('clientLG')
  function saveRecord(){
    localStorage.setItem('Clients',JSON.stringify(clients));
    localStorage.setItem('Products',JSON.stringify(products));
    localStorage.setItem('Sells',JSON.stringify(current_sell));
    numbers = +1;
    clientLG.innerHTML=''
    formDetail.innerHTML=''
    alert('Save it')
  };
const subtotalIn = document.getElementById('subtotalIn');
const taxesIn = document.getElementById('taxesIn');
const totalIn = document.getElementById('totalIn');

const totalReceipt =()=>{
  const sbtotal = parseFloat(subtotalIn.value);
  const tax = 0.18
  const ttax = parseFloat(subtotalIn.value) * tax;
  taxesIn.value = parseFloat(ttax).toFixed(2);
  totalIn.value = parseFloat(sbtotal + ttax).toFixed(2);
};
subtotalIn.onchange=()=>{
  totalReceipt()
};




