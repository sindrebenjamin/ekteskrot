import { Product } from "../interfaces";
import { calculateDiscount } from "../utils/calculateDiscount";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);
  const isDiscounted = product.discountedPrice < product.price;
  const discount = calculateDiscount(product.price, product.discountedPrice);

  console.log(discount);

  return (
    <article className="relative">
      <img className="" src={product.image.url} alt={product.image.alt} />
      <h2>{product.title}</h2>
      {isDiscounted ? (
        <p className="text-red-500">{product.discountedPrice},-</p>
      ) : (
        <p>{product.price},-</p>
      )}
      {isDiscounted && (
        <div className="rounded-full bg-red-500 text-white flex justify-center items-center h-12 w-12">
          {discount}%
        </div>
      )}
    </article>
  );
};

export default ProductCard;
