import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
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
          <h1 className="text-[40px] font-semibold ">All Project</h1>
          <p className="text-sm font-semibold mt-2">
            Home <i class="bx bx-chevron-right"></i>{" "}
            <span className="text-maincolor ">All Project</span>
          </p>
        </div>
      </div>

      <div className="project-all py-5 mt-5">
        <div className="container mx-auto">
          <div className="sub-heading">
            <h3 className="text-maincolor uppercase  font-medium font-popins text-xl">
              All Project
            </h3>
            <h1 className="text-3xl font-semibold mt-2 mb-5 text-titlecolor">
              Better Agency/SEO Solution At <br></br> Your Fingertips
            </h1>
          </div>

          <div className="project-all-card grid-2 mt-14">
            {data?.map((val) => {
              return (
                <>
                  <div className="project-card shadow-md rounded-xl p-5">
                    <Image
                      className="w-full rounded-xl"
                      src={val?.image}
                      width={500}
                      height={500}
                    ></Image>
                    <h2 className="text-2xl font-semibold mt-4 uppercase">
                      {val["title"]}
                    </h2>
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
