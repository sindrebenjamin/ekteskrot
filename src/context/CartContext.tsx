import { createContext } from "react";
import { Product } from "../interfaces";

interface CartContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
