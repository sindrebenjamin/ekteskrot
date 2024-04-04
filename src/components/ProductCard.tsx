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
    <article>
      <img src={product.image.url} alt={product.image.alt} />
      <h2>{product.title}</h2>
      <p>{product.price},-</p>
      <p>
        {product.discountedPrice} {discount}%
      </p>
    </article>
  );
};

export default ProductCard;
