import axios from "axios";

const headerConfig={
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}

export const addToBag=(id)=>{
    let response=axios.post(`http://localhost:3002/api/v1/cart/${id}`,id,headerConfig);
    return response;
}
export const removeFromBag=(id)=>{
    let response=axios.delete(`http://localhost:3002/api/v1/cart/${id}`,headerConfig);
    return response;
}
export const getAllBooksCart=()=>{
    let response=axios.get('http://localhost:3002/api/v1/cart',headerConfig);
    return response;
}
export const removeFromBagDirectly=(id)=>{
    let response=axios.delete(`http://localhost:3002/api/v1/cart/remove/${id}`,headerConfig);
    return response;
}
