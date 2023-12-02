import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("AllProject Calling Fail");
  }
  return res.json();
}

const Featuredproject = async () => {
  const data = await getData();

  return (
    <>
      <section className="featured bg-secondarycolor py-20">
        <div className="container mx-auto">
          <div className="sub-heading">
            <h3 className="text-maincolor uppercase  font-medium font-popins text-xl">
              Featured Project
            </h3>
            <h1 className="text-3xl font-semibold mt-2 mb-5 text-titlecolor">
              We Provide The Perfect Solution <br></br> to your business groth
            </h1>
          </div>

          <div className="featured-all mt-10 grid-2">
            <div className="left">
              <Image
                className="w-full h-full object-cover rounded-xl"
                width="500"
                height="500"
                src={data[0]["image"]}
              ></Image>
              <div className="content">
                <p className="font-popins my-2 font-normal text-sm text-[#2E3E5C]">
                  App Design - June 20, 2022
                </p>
                <h2 className="text-lg font-bold">{data[0]["title"]}</h2>
              </div>
            </div>
            <div className="right grid-2 ">
              {data?.slice(1, 5).map((val) => {
                return (
                  <>
                    <div className="item">
                      <div className="image">
                        <Image
                          width="300"
                          height="300"
                          className="w-full h-full rounded-xl object-cover"
                          src={val["image"]}
                        ></Image>
                      </div>
                      <div className="content">
                        <p className="font-popins my-2 font-normal text-sm text-[#2E3E5C]">
                          App Design - June 20, 2022
                        </p>
                        <h2 className="text-lg font-bold">{val["title"]}</h2>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featuredproject;
