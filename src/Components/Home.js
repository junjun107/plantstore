import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
// import BannerImage from "../Assets/home-banner-image.png";
import LandingBannerImage from "../Assets/Subject.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugiat
            accusamus sapiente. Ut iusto qui quia deleniti assumenda iure?
            Sapiente.
          </p>
          <button className="secondary-button">
            Contact Us <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={LandingBannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
