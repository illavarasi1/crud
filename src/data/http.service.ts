import axios from "axios"
import type { Users } from "../shared/models/User.model";

export const getUsers=async()=>{
    const Users=await axios.get('https://jsonplaceholder.typicode.com/users');
    return Users.data;
}
export const createUser=async(user:Users)=>{
    const body={

        name:user.name,
        email:user.email,
        phone:user.phone,
        website:user.website
    }
await axios.post(`https://jsonplaceholder.typicode.com/users/create`,body);

}
export const updateUser=async(user:Users)=>{
     const body={

        name:user.name,
        email:user.email,
        phone:user.phone,
        website:user.website
    }
await axios.put(`https://jsonplaceholder.typicode.com/users/update/${user.id}`,body);

}
export const deleteUser=async(userid:number)=>{
await axios.delete(`https://jsonplaceholder.typicode.com/users/delete/${userid}`);//string cancadinate
 
}