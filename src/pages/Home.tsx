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

  return (
    <main className="min-h-screen">
      <Section $noXPadding={false}>
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
        {status === "success" && (
          <Container className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products?.data
              .filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((product: Product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </Container>
        )}
        {status === "loading" && (
          <Container>
            <p className="text-center">Loading...</p>
          </Container>
        )}
        {status === "error" && (
          <Container>
            <p className="text-center">Something went wrong.</p>
          </Container>
        )}
      </Section>
    </main>
  );
};

export default Home;
