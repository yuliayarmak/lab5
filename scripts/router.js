class Router{

    getHash(){
        return window.location.hash.split('#')[1];
    }

    getData(name){
        let data = {
            'main': {viewName: 'mainPage', endpointName: 'products'},
            'products': {viewName: 'productsPage', endpointName: 'products'},
            'sale1': {viewName: 'sale1', endpointName: 'sales'},
            'sale2': {viewName: 'sale2', endpointName: 'sales'},
            'sale3': {viewName: 'sale3', endpointName: 'sales'},
            'sale4': {viewName: 'sale4', endpointName: 'sales'},
            'sale5': {viewName: 'sale5', endpointName: 'sales'},
            'sales': {viewName: 'sales', endpointName: 'sales'},
            'ordersubmit': {viewName: 'orderSub', endpointName: 'orders'},
        };

        for(let prop in data){
            if(name === prop){
                return data[prop];
            } 
        }

        if(!Object.prototype.hasOwnProperty.call(data, name)){
            return {viewName: 'mainPage', endpointName: 'products'};
        }

    }

    getState(){
        if (!this.getHash()) return {viewName: 'mainPage', endpointName: 'products'};
        return this.getData(this.getHash());
    }

}

export default Router;