import { Product } from '../models/product.models';
import { Category } from '../models/category.models';

export interface createProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<createProductDto> {}

export interface FindProductDto extends Partial<Readonly<Product>> {}
