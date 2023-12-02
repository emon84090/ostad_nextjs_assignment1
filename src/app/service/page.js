import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("AllProject Calling Fail");
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <div className="page-top bg-[#F8F9FC]">
        <Navbar></Navbar>
        <div className="container mx-auto py-20">
          <h1 className="text-[40px] font-semibold ">Our Services</h1>
          <p className="text-sm font-semibold mt-2">
            Home <i class="bx bx-chevron-right"></i>{" "}
            <span className="text-maincolor ">Our Services</span>
          </p>
        </div>
      </div>

      <div className="service-all py-5 mt-5">
        <div className="container mx-auto">
          <div className="sub-heading">
            <h3 className="text-maincolor uppercase  font-medium font-popins text-xl">
              Our All Services
            </h3>
            <h1 className="text-3xl font-semibold mt-2 mb-5 text-titlecolor">
              We Provide BestWeb design <br></br> services
            </h1>
          </div>

          <div className="service-all-card grid-2 mt-14">
            {data?.map((val) => {
              return (
                <>
                  <div className="service-card shadow-md rounded-lg p-5">
                    <h2 className="text-2xl font-semibold">{val["title"]}</h2>
                    <p className="text-[#9D9D9D] mt-2">{val["des"]}</p>
                    <div className="image-grid grid grid-cols-6 gap-5 grid-rows-2 mt-5">
                      <div className="items1 col-start-1 col-end-5">
                        <Image
                          width="300"
                          height="300"
                          src={val["image2"]}
                          className="w-full h-full max-h-56 object-cover rounded-md"
                          alt="Picture of the author"
                        />
                      </div>
                      <div className="items2 col-start-5 col-end-7">
                        <Image
                          width="300"
                          height="300"
                          src={val["image1"]}
                          alt="Picture of the author"
                          className="w-full h-full max-h-56 object-cover rounded-md"
                        />
                      </div>
                      <div className="items2 col-start-1 col-end-4">
                        <Image
                          width="300"
                          height="300"
                          src={val["image4"]}
                          alt="Picture of the author"
                          className="w-full h-full max-h-56 object-cover rounded-md"
                        />
                      </div>
                      <div className="items2 col-start-4 col-end-7">
                        <Image
                          width="300"
                          height="300"
                          src={val["image3"]}
                          alt="Picture of the author"
                          className="w-full h-full max-h-56 object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
