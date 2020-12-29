const view = (sales) => `
<div id='sale'>
   <div id='sale-img'>
        <img src='img/sales/${sales[3].img}.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>${sales[3].info}</p>
   </div>
</div>
`;

export default view