import Image from "next/image";
import Link from "next/link";
import React from "react";

const navitem = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "team",
    path: "/team",
  },
  {
    name: "service",
    path: "/service",
  },
  {
    name: "projects",
    path: "/project",
  },
  {
    name: "Testimonials",
    path: "/testimonial",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto pt-5">
        <div className="Navbar flex justify-between items-center">
          <div className="logo">
            <img className="w-44 h-[50px]" src="logo.png"></img>
          </div>
          <div className="menu flex items-center">
            <div className="nav">
              <ul>
                {navitem.map((val) => {
                  return (
                    <>
                      <li className="inline-block mx-[10px] px-[10px]">
                        <Link
                          className="capitalize text-base font-popins text-titlecolor font-medium"
                          href={val?.path}
                        >
                          {val?.name}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="action-btn mx-[10px] px-[10px]">
              <button className="border capitalize text-base font-popins text-titlecolor font-medium border-maincolor w-[93px] py-2 rounded-xl">
                login
              </button>
              <button className="ml-[20px] border capitalize text-base font-popins text-white bg-maincolor font-medium border-maincolor w-[105px] py-2 rounded-xl">
                register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
