import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
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
          <h1 className="text-[40px] font-semibold ">Team</h1>
          <p className="text-sm font-semibold mt-2">
            Home <i class="bx bx-chevron-right"></i>{" "}
            <span className="text-maincolor ">Team</span>
          </p>
        </div>
      </div>
      <div className="team-all py-5 mt-5">
        <div className="container mx-auto">
          <div className="sub-heading">
            <h3 className="text-maincolor uppercase  font-medium font-popins text-xl">
              Our Team Member
            </h3>
            <h1 className="text-3xl font-semibold mt-2 mb-5 text-titlecolor">
              Check our awesome team <br></br> members
            </h1>
          </div>

          <div className="team-all-card grid-3 mt-10">
            {data?.map((val) => {
              return (
                <>
                  <div className="team-card bg-[#E3E3E3] rounded-xl overflow-hidden relative">
                    <div className="image">
                      <Image
                        width={393}
                        height={400}
                        className="w-full max-h-96 h-full object-cover"
                        src={val["image"]}
                      ></Image>
                    </div>
                    <div className="content py-6 text-center">
                      <h2 className="text-3xl font-semibold text-titlecolor">
                        {val["name"]}
                      </h2>
                    </div>
                    <div className="social-content w-36 h-12 rounded-3xl flex-center  bg-white absolute top-[69%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                      <div className="social-item flex justify-between w-full px-5 items-center">
                        <Link href={val["facebook"]}>
                          <i class="bx bxl-facebook  text-[#737588] text-base border-r border-gray-300 pr-2"></i>
                        </Link>

                        <Link href={val["twitter"]}>
                          <i class="bx bxl-twitter text-[#737588] text-base border-r border-gray-300 pr-2"></i>
                        </Link>
                        <Link href={val["instagram"]}>
                          <i class="bx bxl-instagram text-[#737588] text-base"></i>
                        </Link>
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
