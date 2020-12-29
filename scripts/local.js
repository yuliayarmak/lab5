class Storage{

    create(){
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', '{}');
        }
    }

    clear() {
        localStorage.setItem('cart', '{}');
    }

    getItems() {
        return JSON.parse(localStorage.getItem('cart'));
    }
    

    add(productId){
        const value = JSON.parse(localStorage.getItem('cart'));
        console.log(value);
        if (value[productId] === undefined) {
            value[productId] = 1;
        } else {
            ++value[productId];
        }
        localStorage.setItem('cart', JSON.stringify(value));
    }
  
    display(){
        let cur = [];
        const cartproducts = this.getItems();
        for(let key in cartproducts){
            console.log(key);
            cur.push({'id': key, 'quantity': cartproducts[key]});
        }
        return cur;
    }
}

export default Storage;
