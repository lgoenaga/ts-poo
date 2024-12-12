import { createProductDto, UpdateProductDto } from '../dto/product.dto';
import { Product } from './product.models';
import { Category } from './category.models';

export interface ProductService {
  getProducts(): Promise<Product[] | string>;
  getProductById(id: string | number): Promise<Product | string>;
  getProductsByCategory(
    categoryId: Category['id']
  ): Promise<Product[] | string>;
  createProduct(product: createProductDto): Promise<Product | string>;
  updateProduct(
    id: Product['id'],
    product: UpdateProductDto
  ): Promise<Product | string>;
  deleteProduct(id: Product['id']): Promise<Product | string>;
}