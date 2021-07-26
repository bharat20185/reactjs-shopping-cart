import axios from 'axios';

const httpService = axios.create({
    baseURL: "https://fakestoreapi.com"
});

export default httpService;