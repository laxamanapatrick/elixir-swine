import axios from 'axios';
// import { decodeUser } from './token/decode-user';

// const user = decodeUser()

export default axios.create({
    baseURL: "https://localhost:44342/api/",
    // headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": 'Bearer ' + user?.token
    // }
})
