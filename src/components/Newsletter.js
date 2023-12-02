import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter flex-center flex-col">
        <h3 className="text-maincolor uppercase  font-medium font-popins text-xl">
          SUBSCRIBE
        </h3>
        <h1 className="text-3xl text-center font-semibold mt-2 mb-2 text-titlecolor">
          Subscribe to get the latest <br></br> news about us
        </h1>
        <p className="text-base text-[#8B8B8B]">
          Please drop your email below to get daily update about what we do
        </p>

        <div className="input mt-7 max-w-xl w-full  relative border h-[62px] border-titlecolor rounded-xl p-2">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="w-full h-full border-none outline-none"
          ></input>
          <button className="absolute inset-auto top-1/2 -translate-x-2 -translate-y-1/2 h-13 px-3 rounded-xl p-3 text-white right-0 bg-[#F55F1D] text-base font-medium">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
