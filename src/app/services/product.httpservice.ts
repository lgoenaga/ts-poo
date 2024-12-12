import { createProductDto, UpdateProductDto } from '../dto/product.dto';
import { Category } from '../models/category.models';
import { Product } from '../models/product.models';
import {ProductService} from '../models/service.models';
import axios from 'axios';

export class ProductHttpService implements ProductService {
  private readonly url: string = 'https://api.escuelajs.co/api/v1/products';

  async getProducts(): Promise<Product[] | string> {
    try {
      const response = await axios.get<Product[]>(this.url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  }

  async getProductById(id: Product['id']): Promise<Product | string> {
    try {
      const response = await axios.get<Product>(`${this.url}/${id}`);
      if (response.status === 404) {
        return 'Product not found';
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }

  }

  async getProductsByCategory(categoryId: Category['id']): Promise<Product[] | string> {
    try {
      const response = await axios.get<Product[]>(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  }

  async createProduct(product: createProductDto): Promise<Product | string> {
    try {
      const response = await axios.post<Product>(this.url, product);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  }

  async updateProduct(id: Product['id'], product: UpdateProductDto): Promise<Product | string> {

    try {
      const response = await axios.put<Product>(`${this.url}/${id}`, product);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
        }
      return 'An unexpected error occurred';
    }
  }
  async deleteProduct(id: Product['id']): Promise<Product | string> {

    try {
      const response = await axios.delete<Product>(`${this.url}/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  }
}