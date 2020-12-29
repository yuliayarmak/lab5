import view from '../sale3.js';

describe('3 sale Page', () => {
     it('display', () => {
       const data = [
          {
           'img': 'image',
           'info': 'abcd',
          }, {
           'img': 'image',
           'info': 'abcd',
          }, {
           'img': 'image3',
           'info': 'a',
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
        <img src='img/sales/image3.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>a</p>
   </div>
</div>
`;

expect(view(data)).toEqual(result);
});
});
