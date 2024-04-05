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
      <Section>
        <Container>
          <picture>
            <source
              media="(max-width:768px)"
              srcSet="/banner_mobile.png"
            ></source>
            <source media="(min-width:768px)" srcSet="/banner.png"></source>
            <img
              className="rounded mb-12"
              src="/banner_mobile.png"
              alt="Woman gleefully sifting through garbage"
            />
          </picture>

          <Input
            className="w-full mb-8"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search..."
          />
        </Container>

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
