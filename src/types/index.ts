export interface Product {
  _id: string;
  productImage: {
    image: string;
  };
  productName: string;
  unitPrice: number;
  packageSize: string;
  type: string;
  description: string;
  reviews: string[];
}
