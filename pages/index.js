import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="online shopping store" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=El+Messiri:wght@400;500;600;700&family=Moon+Dance&family=Parisienne&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@100;200;300;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
