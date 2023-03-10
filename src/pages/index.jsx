import { Beer, Wine } from "@/assets";
import { ProductCardPreview, DrinkCategory, Layout, SearchBar, Section, HomePageHeader } from "@/components";
import axios from "axios";
import { useMemo, useState } from "react";

export default function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (category) => () =>
    setSelectedCategory(category);

  const selectedProducts = useMemo(() => {
    if (selectedCategory === "Wine") return [];
    return products;
  }, [selectedCategory]);

  return (
    <Layout title="Home">
      <HomePageHeader />
      <main>
        <SearchBar />
        <Section title="Drink Category">
          <DrinkCategory
            text="All"
            selected={selectedCategory === "All"}
            onClick={handleCategoryChange("All")}
          />
          <DrinkCategory
            text="Beer"
            icon={Beer.src}
            selected={selectedCategory === "Beer"}
            onClick={handleCategoryChange("Beer")}
          />
          <DrinkCategory
            text="Wine"
            icon={Wine.src}
            selected={selectedCategory === "Wine"}
            onClick={handleCategoryChange("Wine")}
          />
        </Section>
        <Section title="Popular">
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product) => <ProductCardPreview key={product.id} product={product} />)
          ) : (
            <p>Empty</p>
          )}
        </Section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { products } = await (
    await axios.get("http://localhost:3000/api/stock-price")
  ).data;
  return {
    props: {
      products,
    },
  };
}
