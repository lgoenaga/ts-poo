import axios from 'axios';
import {Product} from './models/product.models';

async function getProducts() {
  const {data}: {data: Product[]} = await axios.get('https://api.escuelajs.co/api/v1/products');
  if (data === null) {
    throw new Error('No data');
  }
  return data;
}

(async () => {
  console.log('Before promise');
  try {
    const products = await getProducts();
    console.log(products);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message:', error.message);
      console.error('Error code:', error.code);
      console.error('Status code:', error.response?.status);
    } else {
      console.error(error);
    }
  }
  console.log('After promise');
})();
