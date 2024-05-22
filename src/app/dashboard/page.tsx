"use client";
import Filterdropdown from "@/components/Filterdropdown";
import Countrylist from "@/components/countrylist";

import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="container dashwrapper flex justify-between w-full my-10">
          <input
            className="searchinp"
            type="text"
            placeholder="Search for a country…"
          />
          <div>
            <Filterdropdown />
          </div>
        </div>
      </div>
      <Countrylist />
    </>
  );
};

export default Dashboard;
