const view = (products) => `
<div class='slide'>
<div class='all'>
    <input checked type='radio' name='respond' id='desktop'>
       <article id='slider'>
           <input checked type='radio' name='slider' id='switch1'>
           <input type='radio' name='slider' id='switch2'>
           <input type='radio' name='slider' id='switch3'>
           <input type='radio' name='slider' id='switch4'>
           <input type='radio' name='slider' id='switch5'>

           <div id='slides'>
               <div id='overflow'>
                   <div class='image'>
                       <article><a id='1' href='http://127.0.0.1:5500/index.html#sale1'  onclick=change(1)><img class='img-style' src='img/1.jpg' alt='sale'></a></article>
                       <article><a id='2' href='http://127.0.0.1:5500/index.html#sale2'  onclick=change(2)><img class='img-style' src='img/2.jpg' alt='sale'></a></article>
                       <article><a id='3' href='http://127.0.0.1:5500/index.html#sale3'  onclick=change(3)><img class='img-style' src='img/3.jpg' alt='sale'></a></article>
                       <article><a id='4' href='http://127.0.0.1:5500/index.html#sale4'  onclick=change(4)><img class='img-style' src='img/4.jpg' alt='sale'></a></article>
                       <article><a id='5' href='http://127.0.0.1:5500/index.html#sale5'  onclick=change(5)><img class='img-style' src='img/5.jpg' alt='sale'></a></article>
                   </div>
               </div>
           </div>
           <div id='controls'>
               <label for='switch1'></label>
               <label for='switch2'></label>
               <label for='switch3'></label>
               <label for='switch4'></label>
               <label for='switch5'></label>
           </div>

           <div id='active'>
               <label for='switch1'></label>
               <label for='switch2'></label>
               <label for='switch3'></label>
               <label for='switch4'></label>
               <label for='switch5'></label>
           </div>
       </article>
</div>
</div>
<div id='classic-pizza-list'>
   ${products.map((product) =>  `
   <div class='productBox'>
    <div id='product-img'>
        <img id='img-style' src='img/${product.img}.jpg' alt=''>
    </div>
    <div class='product-name'>
        <p id='pizza-name'>${product.productName}</p>
    </div>
    <div id='ingredients'>
        <span id='ingredientList'>${product.ingredientList}</span>
    </div>
    <div id='pizza-size-list'>
       <div id='buttons'>
           <button id='small' class='btn-size-style'>Маленькая</button>
           <button id='average' class='btn-size-style'>Средняя</button>
           <button id='big' class='btn-size-style'>Большая</button>
       </div>
    </div>
    <div id='price-basket'>
        <div id='price'>
           <p id='pizza-price'>${product.price}</p>
           <p id='currency'>грн</p>
        </div>
        <button class='basket-add' id=${product.id} onclick=getId('${product.id}');getTotal(${product.price})>В корзину</button>
    </div>
    </div>
   `).join('')}
</div>`;

export default view
