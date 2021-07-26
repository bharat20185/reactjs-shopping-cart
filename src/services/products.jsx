import httpService from './http';

const getProducts = async () => {
    const {data} = await httpService.get('/products');
    return data;
}

export {
    getProducts
}