import view from '../sale5.js';

describe('5 sale Page', () => {
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
           'img': 'image',
           'info': 'abcd',
          }, {
           'img': 'image5',
           'info': 'abc',
          }          
       ]
       const result = `
<div id='sale'>
   <div id='sale-img'>
        <img src='img/sales/image5.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>abc</p>
   </div>
</div>
`;

expect(view(data)).toEqual(result);
});
});

