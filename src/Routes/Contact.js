import React from "react";
import Footer from "../Components/Items/Footer";
import Header from "../Components/Items/Header";
import InfoBox from "../Components/Items/InfoBox";
import Map from "../Components/Items/Map";
import Navbar from "../Components/Items/Navbar";

function Contact() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="bg-custompurple pt-8 pb-8">
        <Map />
      </div>

      <InfoBox />
      <Footer />
    </div>
  );
}

export default Contact;
