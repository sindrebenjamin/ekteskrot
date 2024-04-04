import { useState } from "react";

import { Product, ProductsResponse } from "../interfaces";
import { useData } from "../hooks/useData";
import ProductCard from "../components/ProductCard";
import { Container, Section, Input } from "../components/TailwindComponents";

const Home = () => {
  const [query, setQuery] = useState("");
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
      <Section>
        <Input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search..."
        />
        <Container className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products?.data
            .filter((product) =>
              product.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((product: Product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </Container>
      </Section>
    </div>
  );
};

export default Home;
