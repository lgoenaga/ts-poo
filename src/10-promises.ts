import axios from "axios";

// Example the promise

/*
(async () => {
    const promise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve('Data resolved');
        }, 2000);
    });

    console.log('Before promise');

    const result = await promise;

    console.log(result);

    console.log('After promise');
}

)();
*/
async function getProducts() {
  const products = await axios.get('https://api.escuelajs.co/api/v1/product');
  if (products.data === null) {
    throw new Error('No data');
  }
  return products.data;
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
    }else{
      console.error(error);
    }
  }
  console.log('After promise');
})();