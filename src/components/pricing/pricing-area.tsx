import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

const pricing_data = [
  {
    id: 1,
    bg: "/assets/img/price/price-bg-1.jpg",
    title: "Simple vector",
    price: 5,
    features: [
      "Unlimited revision",
      "Custom artwork",
     
    ],
  },
  {
    id: 2,
     bg: "/assets/img/price/price-bg-3.jpg",
    title: "Complicated vector",
    price: 15,
   features: [
      "Unlimited revision",
      "Custom artwork",
     
    ],
   
  },
   {
      id: 3,
      bg: "/assets/img/price/price-bg-3.jpg",
      title: "Complicated digitizing",
      price: 15,
      features: [
        "Unlimited revision",
        "Custom artwork",
      
      ],
    },
    {
      id: 4,
      bg: "/assets/img/price/price-bg-2.jpg",
      title: "Simple digitizing",
      price: 5,
      features: [
        "Unlimited revision",
        "Custom artwork",
      
      ],
    },
   
    
];

export default function PricingArea() {
  return (
    <div className="tp-price-area">
      <div className="container">
        <div className="row">
          {pricing_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6 mb-30">
              <div
                className={`tp-price-item ${
                  item.title.toLowerCase().includes("complicated")
                    ? "active"
                    : ""
                }`}
                style={{
                  backgroundImage: item.title
                    .toLowerCase()
                    .includes("complicated")
                    ? `url(${item.bg})`
                    : "",
                }}
              >
                <div
                  className="tp-price-head"
                  style={{
                    backgroundImage: !item.title
                      .toLowerCase()
                      .includes("complicated")
                      ? `url(${item.bg})`
                      : "",
                  }}
                >
                  <span>#{item.id}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="tp-price-body">
                  <span className="tp-price-monthly">
                    $<i>{item.price}</i>/ per design
                  </span>
                  <div className="tp-price-list">
                    <ul>
                      {item.features.map((l, i) => (
                        <li key={i}>
                          <i className="fa-sharp fa-light fa-check"></i>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <Link
                    className={`tp-btn-black-md ${item.id===2?"white-bg":""} w-100 text-center`}
                    href="/contact-2"
                  >
                    Choose Plan
                    <span>
                      <UpArrow />
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
          <h2 className="!text-[16px] text-center mt-4 leading-snug">
            Custom Patches
            <br />
            Price based on required size and complexity
          </h2>
        </div>
      </div>
    </div>
  );
}
