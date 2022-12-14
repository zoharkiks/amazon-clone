import type { NextPage } from "next";
import Head from "next/head";
import client from "../lib/commerce";

// Redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../redux/productsSlice";
import { getAllCategories } from "../redux/categorySlice";
import { getCart } from "../redux/cartSlice";


// import containers
import { Category, Footer, Hero, Personalized } from "../containers";
// import components
import { Navbar, Sidebar } from "../components";


const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // get all products
    dispatch(getCart())
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);




  return (
    <div className="bg-lightGray text-black h-full">
      <Head>
        <title>Amazon Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <div className="flex">
        <Hero />
        <div className="hidden md:flex h-full">
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
