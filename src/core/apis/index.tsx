import axios from 'axios';

const AXIOS = axios.create({
    baseURL: 'https://www.bumblebee.id.vn',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
})

export default AXIOS