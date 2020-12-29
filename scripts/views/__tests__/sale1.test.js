import view from '../sale1.js';

describe('1 sale Page', () => {
     it('display', () => {
       const data = [
          {
           'img': 'image1',
           'info': 'acd',
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
        <img src='img/sales/image1.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>acd</p>
   </div>
</div>
`;

expect(view(data)).toEqual(result);
});
});