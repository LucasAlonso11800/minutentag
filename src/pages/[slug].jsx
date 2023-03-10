import { Layout, ProductCard, ProductPageHeader } from "@/components";
import axios from "axios";

export default function ProductPage({ product }) {
  const { brand, image } = product;
  return (
    <Layout title={brand}>
      <ProductPageHeader />
      <main>
        <img src={image} alt={brand} className="product-image"/>
        <ProductCard product={product}/>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { products } = await (
    await axios.get("http://localhost:3000/api/stock-price")
  ).data;

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.slug.split("-")[0];
  const { product } = await (
    await axios.get(`http://localhost:3000/api/stock-price/${id}`)
  ).data;
  return {
    props: {
      product,
    },
    revalidate: 5,
  };
}
