import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { fetchUser } from "../redux/slice/user";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";
import FeaturedProduct from "../components/FeaturedProduct.js";
import Events from "../components/Events";
import Sponsuresed from "../components/Sponsuresed";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const response = await dispatch(fetchUser());
    })();
  }, []);
  return (
    <>
      <TopBar />
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Footer />
    </>
  );
};

export default Home;
