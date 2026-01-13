import React from "react";
import { Metadata } from "next";
import PricingMain from "@/pages/pricing/pricing-main";

export const metadata: Metadata = {
  title: "Creatix Apparel - Pricing page",
};

const PricingPage = () => {
  return (
    <PricingMain/>
  );
};

export default PricingPage;
