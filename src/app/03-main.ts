
import {ProductHttpService} from './services/product.httpservice';


const productService = new ProductHttpService();

(async () => {
  console.log('- '.repeat(50));
  console.log('Getting all products');
  const products = await productService.getProducts();
  console.log(products);
  console.log('Products retrieved');
  console.log('- '.repeat(50));
  console.log('Getting product by id');
  let product = await productService.getProductById(99);
  console.log(product);
  console.log('Product retrieved');
  console.log('- '.repeat(50));
  console.log('Getting products by category');
  let productos = await productService.getProductsByCategory(1)
  console.log(productos);
  console.log('Products retrieved');
  console.log('- '.repeat(50));
  console.log('Creating product...');
  await productService.createProduct({
    title: 'New Product Goenaga',
    price: 300,
    description: 'This is a new product 1',
    images: ["https://i.imgur.com/ZANVnHE.jpeg"],
    categoryId: 1,
  });
  console.log('Product created');
  console.log('- '.repeat(50));
  console.log('Updating product...');
  await productService.updateProduct(99, {
    title: 'Updated Product goenaga',
    price: 400,
    description: 'This is an updated product 1',
    images: ['https://i.imgur.com/ZANVnHE.jpeg'],
    categoryId: 1,
  });
  console.log('Product updated');
  console.log('- '.repeat(50));
  console.log('Getting product by id');
  product = await productService.getProductById(99);
  console.log(product);
  console.log('Product retrieved');
  console.log('- '.repeat(50));
  console.log('Removing product...');
  await productService.deleteProduct(106);
  await productService.deleteProduct(105);
  await productService.deleteProduct(107);
  console.log('Product removed');
  console.log('- '.repeat(50));
  console.log('Getting product by id');
  product = await productService.getProductById(107);
  console.log(product);
  console.log('Product retrieved');
  console.log('- '.repeat(50));
})();