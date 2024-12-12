import { Category } from './category.models';
import { BaseModel } from './base.models';

export interface Product extends BaseModel {

  title: string,
  price: number,
  description: string,
  images: string[],
  category: Category,

}
