import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Container, Section } from "../components/TailwindComponents";
import { ProductResponse } from "../interfaces";
import { calculateDiscount } from "../utils/calculateDiscount";
import { returnRating } from "../utils/returnRating";
import { useData } from "../hooks/useData";
import ProductPageImage from "../components/ProductPageImage";
import UserReview from "../components/UserReview";
import Button from "../components/Button";

const ProductPage = () => {
  const params = useParams();
  const { cart, setCart } = useContext(CartContext)!;
  const { data: product, status } = useData<ProductResponse>(
    `https://v2.api.noroff.dev/online-shop/${params.id}`
  );

  const noReviews = product?.data.reviews.length === 0;
  let isDiscounted = false;
  let discount;

  console.log(product?.data);

  function handleAddItemToCart(item: any) {
    setCart([...cart, item]);
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong</p>;
  }

  if (status === "success") {
    isDiscounted = product!.data.discountedPrice < product!.data.price;
    discount =
      isDiscounted &&
      calculateDiscount(product!.data.price, product!.data.discountedPrice);
  }

  //status: loading, success, error, idle

  const priceClasses = isDiscounted ? "text-red-500" : "";
  return (
    <main className="min-h-screen">
      <Section $noXPadding={true}>
        <Container className="flex flex-col sm:flex-row gap-4 md:gap-8">
          <ProductPageImage
            discount={discount ? discount : 0}
            imageUrl={product?.data.image.url ?? ""}
          />
          {/* Product details */}
          <div className="flex flex-col gap-2">
            {/* Title and rating */}
            <div className="flex flex-col justify-between gap-2">
              {/* Title and price */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {product?.data.title}
                </h1>
                <p className={`${priceClasses} text-2xl`}>
                  {product?.data.price},-
                </p>
              </div>
              {returnRating(product?.data.rating)}
            </div>
            <p>{product?.data.description}</p>
            <Button
              onClick={() => handleAddItemToCart(product?.data)}
              size="w-fit px-12 py-4 mt-3"
              color="bg-amber-600 text-white"
              hoverState="hover:bg-amber-700"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z"
                  fill="white"
                />
              </svg>
              <p>Buy</p>
            </Button>
          </div>
        </Container>
      </Section>
      <Section $noXPadding={true}>
        <Container>
          <h2 className="text-2xl font-bold mb-4">
            Reviews ({product?.data.reviews.length})
          </h2>
          <div className="sm:rounded overflow-hidden sm:border-l sm:border-r">
            {noReviews && <p>No reviews yet.</p>}
            {!noReviews &&
              product?.data.reviews.map((review, index) => {
                return (
                  <UserReview
                    key={review.id}
                    review={review}
                    isLast={product.data.reviews.length - 1 === index}
                  />
                );
              })}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default ProductPage;
