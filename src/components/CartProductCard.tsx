import { Product } from "../interfaces";

const CartProductCard = ({
  product,
  isFirst,
  handleDelete,
}: {
  product: Product;
  isFirst: boolean;
  handleDelete: any;
}) => {
  const cardClasses = isFirst ? "border-t" : "";

  return (
    <div className={`${cardClasses} p-4 bg-gray-50 border-b`}>
      <div className="flex justify-between">
        <div>
          <p>{product.title}</p>
          <button
            onClick={() => handleDelete(product)}
            className="text-amber-600 hover:text-amber-700 transition-colors duration-100 font-bold mt-4"
          >
            Fjern
          </button>
        </div>

        <img
          className="aspect-square w-24 object-cover"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>

      <p className="font-bold">{product.price},-</p>
    </div>
  );
};

export default CartProductCard;
