export interface ApiResponse {
  products: Product[];
}

export interface Product {
  _id: string;
  productImage: {
    image: string;
  };
  productName: string;
  unitPrice: number;
  packageSize: string;
  category: string;
  type: string;
  description: string;
  reviews: string[];
}

export interface CartItem {
  _id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  _id: string;
  items: CartItem[];
}

export interface CartResponse {
  cart: Cart;
}
