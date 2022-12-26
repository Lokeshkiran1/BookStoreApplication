import axios from "axios";

const headerConfig={
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}

export const getAllBooks=()=>{
    let response=axios.get('http://localhost:3002/api/v1/books');
    return response;
}