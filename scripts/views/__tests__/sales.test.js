
import view from '../sales.js';

describe('Sale Page', () => {
  it('display', () => {
    const data = [
         {
        'img': 'image',
        'info': 'abcd',
         }
    ]
    const result = `
<div id=''sales>

<div id='sale'>
   <div id='sale-img'>
        <img src='img/sales/image.jpg' alt='sale'>
   </div>
   <div id='sale-text'>
        <p id='sale-info-text'>abcd</p>
   </div>
</div>
</div>
`;

expect(view(data)).toEqual(result);
});
});

