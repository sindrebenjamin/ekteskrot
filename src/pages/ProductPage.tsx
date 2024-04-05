import { useParams } from "react-router-dom";

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
  const { data: product, status } = useData<ProductResponse>(
    `https://v2.api.noroff.dev/online-shop/${params.id}`
  );

  const noReviews = product?.data.reviews.length === 0;
  let isDiscounted = false;
  let discount;

  console.log(product);

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
    <>
      <ProductPageImage
        discount={discount ? discount : 0}
        imageUrl={product?.data.image.url ?? ""}
      />
      {/* Title and rating */}
      <div className="flex flex-col justify-between">
        {/* Title and price */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            {product?.data.title}
          </h1>
          <p className={`${priceClasses} text-2xl`}>{product?.data.price},-</p>
        </div>
        {returnRating(product?.data.rating)}
      </div>
      <p>{product?.data.description}</p>
      <Container>
        <h2 className="text-2xl font-bold mb-4">
          Reviews ({product?.data.reviews.length})
        </h2>
        <div className="">
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
    </>
  );
};

export default ProductPage;
