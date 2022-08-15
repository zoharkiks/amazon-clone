import type { NextPage } from "next";
import Head from "next/head";
import commerce from "../lib/commerce";

// import containers
import { Footer, Hero, Personalized } from "../containers";
// import components
import { Navbar, Sidebar } from "../components";

export async function getStaticProps() {
  // const merchant = await commerce.merchants.about();
  // const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

const Home: NextPage = ({ products }) => {

  return (
    <div className="bg-lightGray text-black">
      <Head>
        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <div className="flex">
        <Hero />
        <div className="hidden md:flex">
          <Sidebar />
        </div>
      </div>
      <Personalized products={products} />

      <Footer />
    </div>
  );
};

export default Home;
