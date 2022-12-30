import axios from "axios";

const headerConfig={
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}

export const addCustomer=(obj)=>{
    let response=axios.post('http://localhost:3002/api/v1/customers',obj,headerConfig);
    return response;
}