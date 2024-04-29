import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'http://192.168.100.6:1337/api'
});


const getCategory = () => axiosClient.get('/categories?populate=*')

const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp => {
    return resp.data.data;
})

const getCategoryList = () => axiosClient.get('/categories?populate=*').then(resp => {
    return resp.data.data;
})

const getAllProducts = () => axiosClient.get('/products?populate=*').then(resp => {
    return resp.data.data;
})

const getProductsByCategory= (category) => axiosClient.get('products?filters[categories][name][Sin]=' + category + '&populate=*').then(resp => {
    return resp.data.data;
})

export default{
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts,
    getProductsByCategory
}