import { NavLink } from "react-router-dom";

import { Product } from "../interfaces";
import { calculateDiscount } from "../utils/calculateDiscount";
import DiscountBubble from "./DiscountBubble";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isDiscounted = product.discountedPrice < product.price;
  const discount = calculateDiscount(product.price, product.discountedPrice);

  return (
    <NavLink
      to={`/product/${product.id}`}
      className="relative flex flex-col gap-4 leading-none group"
    >
      <div className="rounded overflow-hidden relative">
        <img
          className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-200"
          src={product.image.url}
          alt={product.image.alt}
        />
        <div className="w-full h-full bg-black z-10 absolute top-0 right-0 text-white flex justify-center items-center group-hover:opacity-80 opacity-0 transition-opacity duration-200">
          View more
        </div>
      </div>

      <h2>{product.title}</h2>
      {isDiscounted ? (
        <p className="text-red-500 font-bold ">{product.discountedPrice},-</p>
      ) : (
        <p className="font-bold ">{product.price},-</p>
      )}
      {isDiscounted && <DiscountBubble discount={discount} />}
    </NavLink>
  );
};

export default ProductCard;

//view more dark overlay on hover
