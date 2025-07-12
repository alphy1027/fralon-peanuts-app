export interface ApiResponse<T = unknown, K extends string = string> {
  success: boolean;
  message: string;
  statusCode: number;
  payload?: { [key in K]: T };
  error?: string | object;
}

export interface ActiveUser {
  userId: string;
  username: string;
  roles: string[];
}

export interface Product {
  _id: string;
  productImage: {
    image: string;
  };
  productName: string;
  unitPrice: number;
  packageSize: string;
  category: {
    _id: string;
    name: string;
  };
  type: string;
  wholesaleUnitPrice: number;
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

export interface Client {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  membership: string;
  createdAt: Date;
}
