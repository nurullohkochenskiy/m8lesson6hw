"use client";

import Infocontent from "@/components/Infocontent";
import { useRouter } from "next/navigation";
import React from "react";

const ProductDetails: React.FC = () => {
  const router = useRouter();

  return (
    <div className="infowrapper container w-full">
      <div onClick={() => router.back()} className="backbtn my-12">
        {" "}
        {"<--"}Back
      </div>
      <Infocontent />
    </div>
  );
};

export default ProductDetails;
