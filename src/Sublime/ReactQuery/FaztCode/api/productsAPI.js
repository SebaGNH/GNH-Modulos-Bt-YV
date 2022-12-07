import axios from 'axios';

const productsAPI = axios.create({
  baseURL: 'http://localhost:5000/'
})

//digamos que concatena el localhost con el / products
export const getProducts = async () => { 
  const res = await productsAPI.get('/products');
  //const data = await res.data
  return res.data;
}

export const createProduct = (product) => {
  productsAPI.post("/products", product)
}