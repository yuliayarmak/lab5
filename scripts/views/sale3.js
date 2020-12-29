const view = (sales) => `
<div id='sale'>
   <div id='sale-img'>
        <img src='img/sales/${sales[2].img}.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>${sales[2].info}</p>
   </div>
</div>
`;

export default view