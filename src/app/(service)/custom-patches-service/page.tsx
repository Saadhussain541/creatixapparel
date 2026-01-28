import React from "react";
import { Metadata } from "next";
import CustomPatchesMain from "@/pages/custom-patches-service/custom-patches-service";

export const metadata: Metadata = {
  title: "Creatix Apparel - Custom Patches Service",
};

const CustomPatchesServicePage = () => {
  return <CustomPatchesMain />;
};

export default CustomPatchesServicePage;

