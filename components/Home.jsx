import React from "react";
import hero from "./../assets/home-banner.png";
import line from "./../assets/line.png";
import shap from "./../assets/Shap.png";
import highlight from "./../assets/Highlight_05.png";
import Lottie from "lottie-react";
import arrow from "./../assets/arrow-1.json";
import { Link } from "react-router-dom";
import clootrack from "./../assets/clootrack.png";
import dukaan from "./../assets/dukaan.png";
import growthx from "./../assets/growthx_1.png";
import krater from "./../assets/krater.png";
import zasos from "./../assets/zasos.png";

const Home = () => {
  return (
    <section
      style={{
        backgroundImage: `url('${hero}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <div className="relative flex flex-col items-center">
        <p className="mt-40 md:mt-56">
          Reduce support tickets significantly with the{" "}
          <span className="font-bold">power of AI</span>
        </p>
        <div className="relative flex items-center gap-2 mt-5">
          <img
            src={highlight}
            alt=""
            className="absolute md:w-12 md:bottom-20 md:left-[-30px] w-6 left-[-18px] bottom-7"
          />
          <h1 className="text-2xl text-center md:text-8xl anton-regular">
            Discover Our Help Center
          </h1>
          <img src={shap} alt="" className="w-8 md:w-16 animate-pulse" />
        </div>
        <p className="mt-5 text-xl text-center md:text-3xl">
          Support Made Simple. Find Help Fast
        </p>

        <Link to="/dashboard">
          <button className="relative flex items-center gap-1 px-4 py-2 mt-5 text-xl text-white bg-black rounded-md">
            Get Started
            <Lottie animationData={arrow} className="w-8" />
          </button>
        </Link>

        <div className="flex flex-col items-center mt-16 md:mt-32">
          <p className="text-xl font-semibold text-center md:text-2xl">
            Trusted by 200+ businesses worldwide.
          </p>
          <p>Get inspired by a few of them.</p>

          <div className="mt-16 logos">
            <div className="logos-slide">
              <img src={dukaan} alt="" className="logo" />
              <img src={clootrack} alt="" className="logo" />
              <img src={krater} alt="" className="logo" />
              <img src={zasos} alt="" className="logo" />
              <img src={growthx} alt="" className="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
