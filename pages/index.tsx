import type { NextPage } from "next";
import Head from "next/head";
import commerce from "../lib/commerce";

// Redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../redux/productsSlice";
import { getAllCategories } from "../redux/categorySlice";

// import containers
import { Category, Footer, Hero, Personalized } from "../containers";
// import components
import { Navbar, Sidebar } from "../components";


const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // get all products
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

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
      <Personalized />
      <Category/>

      <Footer />
    </div>
  );
};

export default Home;
