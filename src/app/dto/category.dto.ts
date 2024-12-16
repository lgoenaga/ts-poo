import { Category, AccessLevel } from '../models/category.models';
import {IsEnum, IsNotEmpty, IsUrl, Length} from 'class-validator';

export interface createCategorytDto
  extends Omit<Category, 'id' | 'createdAt' | 'updatedAt'> {}

import { validate } from 'class-validator';

/**
 * Data Transfer Object (DTO) for Category.
 *
 * This class is used to transfer category data between processes.
 * It includes validation decorators to ensure the data integrity.
 *
 * @implements createCategorytDto
 */
export class CategoryDto implements createCategorytDto {
  @IsNotEmpty()
  @Length(4, 100)
  name!: string;

  @IsNotEmpty()
  @IsUrl()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessLevel)
  accessLevel?: AccessLevel;

  @IsNotEmpty()
  createdAt!: Date;

  @IsNotEmpty()
  updatedAt!: Date;
}

(async () => {
  let category = new CategoryDto();
  category.name = 'Test';
  category.image = 'https://test.com';
  category.accessLevel = AccessLevel.PUBLIC;
  category.createdAt = new Date();
  category.updatedAt = new Date();
  const errors = await validate(category);
  console.log(errors);

  category = new CategoryDto();
  category.name = 'T';
  category.image = 'https://test';
  category.accessLevel = AccessLevel.PUBLIC;
  category.createdAt = new Date();

  const errors2 = await validate(category);
  console.log(errors2);
}
)();
