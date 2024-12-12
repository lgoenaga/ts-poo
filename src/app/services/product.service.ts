import { Product } from '../models/product.models';
import {
  createProductDto,
  UpdateProductDto,
  FindProductDto,
} from '../dto/product.dto';
import { faker } from '@faker-js/faker';

export class ProductService {

  private products: Product[] = [];

  create(product: createProductDto): Product {
    const newProduct = {
      ...product,
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      images: [faker.image.url()],
      category: {
        id: product.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
      title: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
    };
    return this.add(newProduct);
  }

  add (product: Product) {
    this.products.push(product);
    return product;
  }
  // En este archivo se importa la interfaz Product y el tipo Sizes del archivo product-model.ts, se crea un array de productos y se exporta una función que recibe un producto y lo agrega al array de productos.

  gets(): Product[] {
    return this.products;
  }
  // Se exporta una función que retorna el array de productos.

  getById(id: number | string): Product | string {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      return `Product with id ${id} not found`;
    }
    return product;
  }
  // Se exporta una función que recibe un id y retorna el producto que tenga el mismo id.

  getByCategoryId(categoryId: number | string): Product[] | string {
    const products = this.products.filter((product) => product.category.id === categoryId);
    if (products.length === 0) {
      return `Products with categoryId ${categoryId} not found`;
    }
    return products;
  }

  remove(id: number | string): void {
    const index = this.products.findIndex(
      (product) => product.id === id
    );
    this.products.splice(index, 1);
  }
  // Se exporta una función que recibe un id, busca el índice del producto con el mismo id y lo elimina del array de productos.

  update(
    id: Product['id'],
    product: UpdateProductDto
  ): Product {
    const index = this.products.findIndex(
      (product) => product.id === id
    );
    this.products[index] = {
      ...this.products[index],
      ...product,
      updatedAt: faker.date.recent(),
    };
    return this.products[index];
  }
  // Se exporta una función que recibe un id y un producto, busca el índice del producto con el mismo id, actualiza los datos del producto y retorna el producto actualizado.

  finds(dto: FindProductDto): Product[] {
    return this.products.filter((product) => {
      return Object.keys(dto).every((key) => {
        return dto[key as keyof FindProductDto] === product[key as keyof Product];
      });
    }
    );
  }
  // Se exporta una función que recibe un dto y retorna los productos que cumplan con las condiciones del dto.
  findOne(dto: FindProductDto): Product | undefined {
    return this.products.find((product) => {
      return Object.keys(dto).every((key) => {
        return dto[key as keyof FindProductDto] === product[key as keyof Product];
      });
    });
  }
}