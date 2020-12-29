const view = (products) => `
<div id='categories-menu'>
<ul id='categories-list'>
<li><button class='categories-link' id='classic' onclick=getCategory('classic')>Классичиская</button></li>
<li><button class='categories-link' id='special' onclick=getCategory('special')>Фирменная</button></li>
<li><button class='categories-link' id='legend' onclick=getCategory('legend')>Легенды</button></li>
<li><button class='categories-link' id='premium' onclick=getCategory('premium')>Премиум</button></li>
</ul>
</div>
<div id='classic-pizza-list'>
   ${products.map((product) =>  `
   <div class='productBox' id=${product.category}>
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
        <button class='basket-add' id='${product.id}' onclick=getId('${product.id}');getTotal(${product.price})>В корзину</button>
    </div>
    </div>
   `).join('')}
</div>`;

export default view
