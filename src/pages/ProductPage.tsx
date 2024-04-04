import { useParams } from "react-router-dom";

import { ProductResponse } from "../interfaces";
import { calculateDiscount } from "../utils/calculateDiscount";
import { useData } from "../hooks/useData";
import ProductPageImage from "../components/ProductPageImage";

const ProductPage = () => {
  const params = useParams();
  const { data: product, status } = useData<ProductResponse>(
    `https://v2.api.noroff.dev/online-shop/${params.id}`
  );

  let isDiscounted = false;
  let discount;

  console.log(isDiscounted);

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
  return (
    <div>
      <h1>{product?.data.title}</h1>
      <ProductPageImage
        discount={discount ? discount : 0}
        imageUrl={product?.data.image.url ?? ""}
      />
    </div>
  );
};

export default ProductPage;
