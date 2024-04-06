import { Product } from "../interfaces";
import QuantitySelector from "./QuantitySelector";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProductCard = ({
  product,
  isFirst,
  handleDelete,
}: {
  product: Product;
  isFirst: boolean;
  handleDelete: any;
}) => {
  const { cart, setCart } = useContext(CartContext)!;
  const cardClasses = isFirst ? "border-t" : "";

  function handleQuantity(q: number) {
    const nextCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: q };
      }
      return item;
    });
    setCart(nextCart);
  }

  return (
    <div className={`${cardClasses} p-4 bg-gray-50 border-b`}>
      <div className="flex justify-between">
        <div className="flex flex-col gap-6 items-start">
          <p>{product.title}</p>
          <button
            onClick={() => handleDelete(product)}
            className="text-amber-600 hover:text-amber-700 transition-colors duration-100 font-bold"
          >
            Fjern
          </button>
          <div className="flex gap-4">
            <QuantitySelector
              quantity={product.quantity}
              handleQuantity={handleQuantity}
            />
            <p className="font-bold">{product.price},-</p>
          </div>
        </div>
        <img
          className="aspect-square w-24 h-24 object-cover"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>
    </div>
  );
};

export default CartProductCard;
