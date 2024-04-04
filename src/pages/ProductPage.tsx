import { useParams } from "react-router-dom";

import { ProductResponse } from "./interfaces";
import { useData } from "../hooks/useData";

const ProductPage = () => {
  const params = useParams();
  const { data: product, status } = useData<ProductResponse>(
    `https://v2.api.noroff.dev/online-shop/${params.id}`
  );
  console.log(product?.data.title);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong</p>;
  }

  //status: loading, success, error, idle
  return (
    <div>
      <h1>{product?.data.title}</h1>
    </div>
  );
};

export default ProductPage;
