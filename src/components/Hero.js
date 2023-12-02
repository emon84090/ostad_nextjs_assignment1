import React from "react";
import Navbar from "./Navbar";
import Sponsor from "./Sponsor";
import Image from "next/image";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("AllProject Calling Fail");
  }
  return res.json();
}

const Hero = async () => {
  const data = await getData();

  return (
    <>
      <div className="banner  bg-secondarycolor py-3">
        <Navbar></Navbar>
        <div className="container mx-auto ">
          <div className="hero grid grid-cols-12 w-full py-16 justify-items-center items-center">
            <div className="left col-span-5">
              <h1 className="font-bold text-[50px] leading-[65px]">
                {data["title"]}
              </h1>
              <p className="text-titlecolor text-xl mt-2 font-medium">
                {data["description"]}
              </p>
              <button className="w-44 h-[70px] bg-maincolor mt-10 rounded-2xl text-white text-xl font-medium">
                Get Started
              </button>
            </div>
            <div className="right col-span-7">
              <div className="image-grid grid grid-cols-6 gap-5 grid-rows-2">
                <div className="items1 col-start-1 col-end-5">
                  <Image
                    width="300"
                    height="300"
                    src={data["image2"]}
                    className="w-full h-full max-h-56 object-cover rounded-md"
                    alt="Picture of the author"
                  />
                </div>
                <div className="items2 col-start-5 col-end-7">
                  <Image
                    width="300"
                    height="300"
                    src={data["image1"]}
                    alt="Picture of the author"
                    className="w-full h-full max-h-56 object-cover rounded-md"
                  />
                </div>
                <div className="items2 col-start-1 col-end-3">
                  <Image
                    width="300"
                    height="300"
                    src={data["image4"]}
                    alt="Picture of the author"
                    className="w-full h-full max-h-56 object-cover rounded-md"
                  />
                </div>
                <div className="items2 col-start-3 col-end-7">
                  <Image
                    width="300"
                    height="300"
                    src={data["image3"]}
                    alt="Picture of the author"
                    className="w-full h-full max-h-56 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sponsor></Sponsor>
      </div>
    </>
  );
};

export default Hero;
