import axios from 'axios';

const AXIOS = axios.create({
    baseURL: 'http://api.nguyentaimarine.com',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
})

export default AXIOS