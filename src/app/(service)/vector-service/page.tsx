import React from "react";
import { Metadata } from "next";
import VectorServiceMain from "@/pages/vector-service/vector-service";

export const metadata: Metadata = {
  title: "Creatix Apparel - Vector Service page",
};

const VectorServicePage = () => {
  return <VectorServiceMain />;
};

export default VectorServicePage;

