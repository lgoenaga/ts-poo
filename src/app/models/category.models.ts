import { BaseModel } from "./base.models";

export enum AccessLevel {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface Category extends BaseModel {
  name: string,
  image: string,
  accessLevel?: AccessLevel,
}


