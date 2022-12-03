import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import LoadingAnimation from "../src/Components/UI/LoadingAni";
import Navbar from "../src/Components/UI/Navbar";
import SlideShow from "../src/Components/LandingPageComponents/slideShow";
import ProductCategories from "../src/Components/LandingPageComponents/ProductCategory";
import CallToAction from "../src/Components/LandingPageComponents/CallToAction";
import Footer from "../src/Components/UI/Footer";

export default function Home() {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when the component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Market Media</title>
        <meta name="description" content="Welcome to market media" />
      </Head>
      {playAnimation ? (
        <>
          <Navbar />
          <hr className="mt-1.5"></hr>
          <SlideShow />
          <ProductCategories/>
          <CallToAction/>
          <Footer/>
        </>
      ) : (
        <LoadingAnimation />
      )}
    </React.Fragment>
  );
}
