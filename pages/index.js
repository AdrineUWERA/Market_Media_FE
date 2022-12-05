import React, { useEffect, useState } from "react";
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
    
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <React.Fragment>
      {playAnimation ? (
        <>
          <Navbar />
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
