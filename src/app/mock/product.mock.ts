export interface Product {
  productId: number;
  name: string;
  price: number;
  title: string;
  description: string;
}

export const product: Product[] = [
  {
    productId: 10,
    name: "product01",
    title: "PRODUCT 1",
    price: 250,
    description: "Description Product01"
  },

  {
    productId: 20,
    name: "product02",
    title: "PRODUCT 2",
    price: 200,
    description: "Description Product02"
  },
  {
    productId: 30,
    name: "product03",
    title: "PRODUCT 3",
    price: 500,
    description: "Description Product03"
  },

  {
    productId: 40,
    name: "product04",
    title: "PRODUCT 4",
    price: 500,
    description: "Description Product04"
  }
];
