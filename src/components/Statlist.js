import React from "react";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("AllProject Calling Fail");
  }
  return res.json();
}

const Statlist = async () => {
  const data = await getData();

  return (
    <>
      <section className="Statlist mt-16">
        <div className="container mx-auto">
          <div className="state-all grid-4">
            <div className="stat-item flex shadow-lg rounded-xl p-8 justify-center items-center flex-col ">
              <div className="icon w-20 h-20 bg-secondarycolor flex-center rounded-md">
                <img src="state_icon/Group 3.png"></img>
              </div>
              <h2 className="text-3xl font-semibold text-titlecolor mt-4">
                {data["followers"]}
              </h2>
              <span className="text-base text-titlecolor font-normal capitalize mt-1">
                followers
              </span>
            </div>
            <div className="stat-item flex shadow-lg  p-8 justify-center items-center flex-col rounded-xl">
              <div className="icon w-20 h-20 bg-secondarycolor flex-center rounded-md">
                <img src="state_icon/Happy 1.png"></img>
              </div>
              <h2 className="text-3xl font-semibold text-titlecolor mt-4">
                {data["solved"]}
              </h2>
              <span className="text-base text-titlecolor font-normal capitalize mt-1">
                solved
              </span>
            </div>
            <div className="stat-item flex shadow-lg  p-8 justify-center items-center flex-col rounded-xl">
              <div className="icon w-20 h-20 bg-secondarycolor flex-center rounded-md">
                <img src="state_icon/Happy 1.png"></img>
              </div>
              <h2 className="text-3xl font-semibold text-titlecolor mt-4">
                {data["customers"]}
              </h2>
              <span className="text-base text-titlecolor font-normal capitalize mt-1">
                Happy customers
              </span>
            </div>
            <div className="stat-item flex shadow-lg  p-8 justify-center items-center flex-col rounded-xl">
              <div className="icon w-20 h-20 bg-secondarycolor flex-center rounded-md">
                <img src="state_icon/Scan 3.png"></img>
              </div>
              <h2 className="text-3xl font-semibold text-titlecolor mt-4">
                {data["projects"]}
              </h2>
              <span className="text-base text-titlecolor font-normal capitalize mt-1">
                projects
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statlist;
