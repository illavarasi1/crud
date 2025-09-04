import axios from "axios"

export const getUsers=async()=>{
    const Users=await axios.get('https://jsonplaceholder.typicode.com/users');
    return Users.data;
}