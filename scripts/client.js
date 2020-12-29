class Client {
    getData(endpoint){
        return fetch(`http://my-json-server.typicode.com/yuliayarmak/test/${endpoint}`)
            .then(response => response.json());
    }

    post(data, endpoint) {
        return fetch(`https://my-json-server.typicode.com/yuliayarmak/test/${endpoint}`, { 
            method: 'POST',  
            body: JSON.stringify(data)
        })
            .then((response) => response.json());
    }
}


export default Client;