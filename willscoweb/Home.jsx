import React from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import CenteredLogo from "./components/CenteredLogo";
import Testimony from "./components/Testimony";
import Opportunities from "./components/Opportunities";
import Pack from "./components/Pack";

const Home = () => {
  return (
    <>
      {/* <Title title="Palynx | The People Pairing App" /> */}
      <div className="w-full h-full">
        <Header />
        <ImageSlider />
        <CenteredLogo />
        <Testimony />
        <Opportunities />
        <Pack />
      </div>
    </>
  );
};
export default Home;
