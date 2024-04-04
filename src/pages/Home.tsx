import { NavLink } from "react-router-dom";

import { Product, ProductsResponse } from "./interfaces";
import { useData } from "../hooks/useData";

const Home = () => {
  const { data: products, status } = useData<ProductsResponse>(
    "https://v2.api.noroff.dev/online-shop"
  );

  //status: loading, success, error, idle

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our store!</p>
      {products?.data.map((product: Product) => {
        return <NavLink to={`/product/${product.id}`}>{product.title}</NavLink>;
      })}
    </div>
  );
};

export default Home;
