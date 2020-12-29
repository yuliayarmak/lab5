import view from '../sale4.js';

describe('4 sale Page', () => {
     it('display', () => {
       const data = [
          {
           'img': 'image',
           'info': 'abcd',
          }, {
           'img': 'image',
           'info': 'abcd',
          }, {
           'img': 'image',
           'info': 'abcd',
          }, {
           'img': 'image4',
           'info': 'ab',
          }, {
           'img': 'image5',
           'info': 'abc',
          }          
       ]
       const result = `
<div id='sale'>
   <div id='sale-img'>
        <img src='img/sales/image4.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>ab</p>
   </div>
</div>
`;

expect(view(data)).toEqual(result);
});
});
