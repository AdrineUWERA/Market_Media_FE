import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import Navbar from "./../src/Components/UI/Navbar";
import Footer from "./../src/Components/UI/Footer";
import LoadingAnimation from "./../src/Components/UI/LoadingAni";
import SellerApplicationForm from "./../src/Components/SellerApplicationForm";
import PopUp from "../src/Components/UI/popUp";
import { BusinessContext } from "./../src/Context/updateBusinessProfile";


export default function SellerApplication() {
    const [playAnimation, setPlayAnimation] = useState(false);
    const { showModal, setShowModal} = useContext(BusinessContext);


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
              <SellerApplicationForm/>
              <PopUp isVisible={showModal} onClose={()=> setShowModal(false)}/>
              <Footer/>
            </>
          ) : (
            <LoadingAnimation />
          )}
        </React.Fragment>
      );
}
