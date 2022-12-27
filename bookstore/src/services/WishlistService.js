import axios from "axios";

const headerConfig={
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}

export const addToWishList=(id)=>{
    let response=axios.post(`http://localhost:3002/api/v1/wishlist/${id}`,id,headerConfig);
    return response;
}