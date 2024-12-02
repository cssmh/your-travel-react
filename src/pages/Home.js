import React from "react";
import BannerWithTabs from "../components/home/BannerWithTabs";
import FeaturedFleets from "../components/home/FeaturedFleets";
import FeatureOffers from "../components/home/FeatureOffers";
import FeatureDestination from "../components/home/FeatureDestination";
import Testimonials from "../components/home/Testimonials";
import Gallery from "../components/home/Gallery";
import Blog from "../components/home/Blog";

const Home = () => {
  return (
    <>
      <BannerWithTabs />
      <FeaturedFleets />
      <FeatureOffers/>
      <FeatureDestination/>
      <Gallery/>
      <Blog/>
      <Testimonials/>

    </>
  );
};

export default Home;
