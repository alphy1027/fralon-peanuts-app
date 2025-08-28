// RESPONSE
export interface ApiResponse<T = unknown, K extends string = string> {
  success: boolean;
  message: string;
  statusCode: number;
  payload?: { [key in K]: T };
  error?: string | object;
}
// USER
export interface Client {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  membership: string;
  createdAt: Date;
}

export interface SignupPayload extends Pick<Client, "username" | "email"> {
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordPayload {
  password: string;
  confirmPassword: string;
  resetPasswordToken: string;
}

export interface NewUser extends Pick<Client, "_id" | "email" | "username"> {}

export interface ActiveUser {
  userId: string;
  username: string;
  roles: string[];
}
// PRODUCT
export interface Product {
  _id: string;
  productImage: {
    image: string;
  };
  productName: string;
  unitPrice: number;
  packageSize: "200gms" | "400gms" | "800gms" | "1kg" | "1.5kg";
  category: {
    _id: string;
    name: string;
  };
  type: "smooth" | "crunchy";
  wholesaleUnitPrice: number;
  description: string;
  reviews: string[];
}
// CART
export interface CartItem {
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
// ORDER
export interface UserOrders {
  _id: string;
  orders: Order[];
}

export interface OrderItem {
  product: string;
  quantity: number;
  price: number;
  priceType?: "retail" | "wholesale";
  subTotal: number;
}

export interface PopulatedOrderItem extends Omit<OrderItem, "product"> {
  product: Product;
}

export interface OrderAddress {
  county?: string;
  subCounty?: string;
  ward?: string;
  area?: string;
  additionalDetails?: string;
}

export interface Order {
  _id: string;
  client: {
    _id: string;
    username: string;
    email: string;
  };
  items: PopulatedOrderItem[];
  deliveryMethod: "pickup" | "delivery";
  address?: OrderAddress;
  totalPrice: number;
  paymentStatus: "unpaid" | "paid" | "failed";
  status: "pending" | "processing" | "completed" | "shipped" | "delivered" | "cancelled";
  paymentMethod: "cash" | "mpesa" | "bank" | "paypal";
  transaction: string | null;
  notes?: string;
  createdAt: Date;
}

export interface OrderPayload extends Pick<Order, "address" | "paymentMethod" | "notes"> {
  items: OrderItem[];
}
