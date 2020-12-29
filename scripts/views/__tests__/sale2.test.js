import view from '../sale2.js';

describe('2 sale Page', () => {
     it('display', () => {
       const data = [
          {
           'img': 'image',
           'info': 'abcd',
          }, {
           'img': 'image2',
           'info': 'abd',
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
        <img src='img/sales/image2.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>abd</p>
   </div>
</div>
`;

expect(view(data)).toEqual(result);
});
});