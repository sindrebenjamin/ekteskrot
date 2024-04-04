import { NavLink } from "react-router-dom";

import { Product } from "../interfaces";
import { calculateDiscount } from "../utils/calculateDiscount";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);
  const isDiscounted = product.discountedPrice < product.price;
  const discount = calculateDiscount(product.price, product.discountedPrice);

  return (
    <NavLink
      to={`/product/${product.id}`}
      className="relative flex flex-col gap-4 leading-none group"
    >
      <div className="rounded overflow-hidden">
        <img
          className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-200"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>

      <h2>{product.title}</h2>
      {isDiscounted ? (
        <p className="text-red-500 font-bold ">{product.discountedPrice},-</p>
      ) : (
        <p className="font-bold ">{product.price},-</p>
      )}
      {isDiscounted && (
        <div className="absolute top-2 right-2 md:top-4 md:right-4 rounded-full bg-red-500 text-white flex justify-center items-center h-12 w-12">
          {discount}%
        </div>
      )}
    </NavLink>
  );
};

export default ProductCard;
