// types.ts
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: { product: Product };
};
