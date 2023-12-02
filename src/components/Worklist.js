import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("AllProject Calling Fail");
  }
  return res.json();
}

const Worklist = async () => {
  const data = await getData();

  console.log(data);
  return (
    <>
      <section className="worklist">
        <div className="container mx-auto">
          <div className="sub-heading">
            <h3 className="text-maincolor uppercase  font-medium font-popins text-xl">
              worklist
            </h3>
            <h1 className="text-3xl font-semibold mt-2 mb-5 text-titlecolor">
              We Provide The Perfect Solution <br></br> to your business groth
            </h1>
          </div>

          <div className="all-work-home grid-3 mt-20">
            {data?.map((val) => {
              return (
                <>
                  <div className="item">
                    <div className="icon mb-3">
                      {val["step"] === "02" && (
                        <img className="w-20" src="heart.png"></img>
                      )}
                      {val["step"] === "01" && (
                        <img className="w-20" src="activity.png"></img>
                      )}
                      {val["step"] === "03" && (
                        <img className="w-20" src="work.png"></img>
                      )}
                    </div>

                    <div className="text-content">
                      <h2 className="text-2xl font-semibold mb-2">
                        {val["title"]}
                      </h2>
                      <p className="font-normal text-titlecolor">
                        The name Of Our country is bangladesh,amar sonar bangla
                        amoi tomay valobashi
                      </p>
                      <Link className="mt-8 text-lg inline-block" href="/">
                        Learn More
                        <i class="bx bx-right-arrow-alt w-4 ml-1 h-[14px] text-titlecolor"></i>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Worklist;
