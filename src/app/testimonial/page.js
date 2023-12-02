import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
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
          <h1 className="text-[40px] font-semibold ">Testimonial List</h1>
          <p className="text-sm font-semibold mt-2">
            Home <i class="bx bx-chevron-right"></i>{" "}
            <span className="text-maincolor ">Testimonial List</span>
          </p>
        </div>
      </div>

      <div className="testimonial-all py-5 mt-5">
        <div className="container mx-auto">
          <div className="sub-heading">
            <h3 className="text-maincolor uppercase  font-medium font-popins text-xl">
              Testimonial List
            </h3>
            <h1 className="text-3xl font-semibold mt-2 mb-5 text-titlecolor">
              Better Agency/SEO Solution At <br></br> Your Fingertips
            </h1>
          </div>

          <div className="testimonial-all-card grid-3 mt-14">
            {data?.map((val) => {
              return (
                <>
                  <div className="testimonial-card justify-center items-center flex flex-col shadow-md rounded-xl space-y-2 p-5">
                    <Image
                      className="w-[100px]  h-[100px] object-cover rounded-xl"
                      src={val?.image}
                      width={500}
                      height={500}
                    ></Image>
                    <div className="msg">
                      <p className="text-base font-normal text-[#9D9D9D]">
                        {val["msg"]}
                      </p>
                    </div>
                    <h2 className="text-[26px] font-semibold">{val["name"]}</h2>
                    <p className="text-base text-titlecolor">
                      {val["designation"]}
                    </p>
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
