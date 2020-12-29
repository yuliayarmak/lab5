class Valid {

    emailCheck(value){
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(value).toLowerCase());
    }
    
    validphone(phoneNumber) {
        let re = /^[\d]{1}\([\d]{2,3}\)\[\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
        return re.test(phoneNumber);
    }  
}


export default Valid;