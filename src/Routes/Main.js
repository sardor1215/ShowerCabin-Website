import React from "react";
import Carousel from "../Components/Items/Carousel";

import Footer from "../Components/Items/Footer";
import Header from "../Components/Items/Header";
import InfoBox from "../Components/Items/InfoBox";
import Intro from "../Components/Items/Intro";
import Map from "../Components/Items/Map";
import Navbar from "../Components/Items/Navbar";
import Part2 from "../Components/Items/Part2";
import VidBox from "../Components/Items/VidBox";

function Main() {
  return (
    <div className="h-screen ">
      <Header />

      <Navbar />
      <Intro />
      <Part2 />
      <VidBox />
      <Map />
      <InfoBox />
      <Footer />
    </div>
  );
}

export default Main;
