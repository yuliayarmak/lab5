import '../style.css'
import TemplateProcessor from './templateProcessor.js';
import Router from './router.js';
import Client from './client.js';
import Storage from './local.js';
import Valid from './valid.js';

const storage = new Storage();
const router = new Router();
const client = new Client();
const templateProcessor = new TemplateProcessor();
const valid = new Valid();

const { viewName, endpointName } = router.getState();

let view;

import(`./views/${viewName}.js`)
    .then((viewModule) => {
        view = viewModule.default;
        return client.getData(endpointName);
    })

    .then((data) => {
        templateProcessor.render(view(data));
    });

globalThis.change = id => {
    window.location.href = document.getElementById(`${id}`).href;
    window.location.reload();
};

globalThis.getCategory = category => {
    let list = document.getElementsByClassName('productBox');
    console.log(list);
    for(let i=0; i<list.length; i++){
        if(list[i].id !== category){
            console.log(list[i].id);
            list[i].style.display = 'none';
        } else {
            list[i].style.display = 'block';
        }
    }
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let a = [];
let total = document.getElementById('total-price');

storage.create();

globalThis.getId = (idPizza) => {
    storage.add(idPizza);
};

globalThis.getTotal = (price) => {
    a.push(price);
    let state = a.reduce(reducer);
    console.log(price);
    total.innerText = state;
};

globalThis.order = () => {
    window.location.href = 'http://127.0.0.1:5500/index.html#ordersubmit';
    window.location.reload();
};


globalThis.showOrder = () => {
    let ordered = storage.display();
    client.getData('db').then(result=>{
        for(let key in result){
            if(key == 'products'){
                for(let a in result[key]){
                    for(let n in result[key][a]){
                        for(let i=0; i<ordered.length; i++){
                            for(let k in ordered[i]){
                                if(k == 'id'){
                                    if(result[key][a][n] == ordered[i][k]){
                                        ordered[i]['productName'] = result[key][a]['productName'];
                                        ordered[i]['price'] = result[key][a]['price'];
                                        let view = `
                              <div id='orders-list'>
                                 ${ordered.map((product) => `
                                 <div id='order'>
                                   <button id='close'><img id='img-style-close' src='img/close.png' alt='close'></button>
                                   <p id='pizzaName'>${product.productName}</p>
                                   <p id='quantity'>${product.quantity}</p>
                                   <p id='totalAmount'>${product.price*product.quantity}</p>
                                 </div>`).join('')}
                              </div>
                              <div id='confirm-btn'>
                              <button id='confirm' onclick=order()>Подтвердить</button>
                              </div>`;
                                        templateProcessor.render(view);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });   
};

let curObj;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

globalThis.submit = () => {
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    if(valid.emailCheck(email.value) && valid.validphone(phone.value)){
        let fields = document.getElementsByClassName('field');
        for(let i=0; i<fields.length; i++){
            if(fields[i].value == ''){
                alert('Введите данные');
            } else {
                let name = document.getElementById('name');
                let address = document.getElementById('address');
                let time = document.getElementById('time');
                curObj = {};
                curObj['name'] = name.value;
                curObj['address'] = address.value;
                curObj['time'] = time.value;
                curObj['orderId'] = getRandomArbitrary(1, 10000000000000000000);
                console.log(curObj);
                client.post(curObj, 'orders' );
                storage.clear();
                let form =document.getElementById('form');
                let btnSubmit =document.getElementById('btn-submit');
                let btn = document.getElementById('btn-go');
                form.style.display = 'none';
                btn.style.display = 'block';
                btnSubmit.style.display = 'none';
            }
        }
    } else {
        alert('sdelai pravilno');
    }
};

globalThis.go = () => {
    window.location.href = 'http://127.0.0.1:5500/index.html#main';
    window.location.reload();
};