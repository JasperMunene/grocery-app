const { default: axios } = require("axios") ;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api'
});


const getCategory = () => axiosClient.get('/categories')

export default{
    getCategory
}