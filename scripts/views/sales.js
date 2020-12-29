const view = (sales) => `
<div id=''sales>
${sales.map((sale) =>  `
<div id='sale'>
   <div id='sale-img'>
        <img src='img/sales/${sale.img}.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>${sale.info}</p>
   </div>
</div>`).join('')}
</div>
`;

export default view