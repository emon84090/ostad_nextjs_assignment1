import Featuredproject from "@/components/Featuredproject";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Statlist from "@/components/Statlist";
import Worklist from "@/components/Worklist";
import React from "react";

const page = () => {
  return (
    <>
      <Hero></Hero>
      <Worklist></Worklist>
      <Statlist></Statlist>
      <Featuredproject></Featuredproject>
    </>
  );
};

export default page;
