import axios from 'axios';
import { Product } from '../models/product.models';
import { Category } from '../models/category.models';
import { UpdateProductDto } from '../dto/product.dto';

export class BaseHttpService<T> {
  // data: T[] = [];
  //private readonly url: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private url: string) {}

  getAll(): T[] | Promise<T[]> {
    return [];
  }

  async getProducts(): Promise<T[] | string> {
    try {
      const response = await axios.get<T[]>(this.url);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  }

  async updateItem<TM, U>(id: TM, item: U): Promise<T | string> {
    try {
      const response = await axios.put<T>(`${this.url}/${id}`, item);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  }
}

(async () => {

let url = 'https://api.escuelajs.co/api/v1/';
const productos = new BaseHttpService<Product>(url + 'products');
const productosData = await productos.getProducts();
console.log(productosData.length);

const categorias = new BaseHttpService<Category>(url + 'categories');
const categoriasData = await categorias.getProducts();
console.log(categoriasData.length);

const productosUpdate = new BaseHttpService<Product>(url + 'products');
const productosUpdateData = await productosUpdate.updateItem<
  Product['id'],
  UpdateProductDto
>(108, { title: 'New Product Generico Goenaga' });
console.log(productosUpdateData);
})();
/*
const service = new BaseHttpService<number>();
service.data.push(1); // OK


const service = new BaseHttpService<number>();
service.getAll(); // OK

const service1 = new BaseHttpService<string>();
service1.getAll(); // OK

*/