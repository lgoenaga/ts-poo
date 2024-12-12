import {ProductService} from './services/product.service';
import { Category } from './models/category.models';

const productService = new ProductService();

for (let i = 0; i < 10; i++) {
const newProduct = {
  title: '',
  price: 0,
  description: '',
  images: [],
  categoryId: i,
  };
  productService.create(newProduct);
}

console.log('- '.repeat(50));
console.log('Recuperando productos');
const products = productService.gets();
console.log(products);
console.log('- '.repeat(50));
console.log('Recuperando productos por id');
let product = productService.getById('1');
console.log(product);
console.log('- '.repeat(50));
console.log('Recuperando productos por categoría');
let productos = productService.getByCategoryId(9);
console.log(productos);
console.log('- '.repeat(50));
console.log('Recuperando productos por id');
product = productService.getById(products[0].id);
console.log(product);
console.log('- '.repeat(50));
console.log('Eliminando producto');
let longitud = products.length;
console.log('Longitud antes de eliminar:', longitud);
console.log('Producto a eliminar:');
product = productService.getById(products[0].id);
let prodid = products[0].id;
console.log(product);
productService.remove(products[0].id);
longitud = products.length;
console.log('Longitud después de eliminar:', longitud);
console.log('Buscar producto eliminado:');
product = productService.getById(prodid);
console.log(product);
console.log('- '.repeat(50));
console.log('Actualizando producto');
productService.update(products[1].id, { title: 'New title' });
product = productService.getById(products[1].id);
console.log(product);
console.log('- '.repeat(50));

