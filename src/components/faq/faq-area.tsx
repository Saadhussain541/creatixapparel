import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from "@/assets/img/inner-faq/faq/banner-faq.jpg";
import FaqItem from "./faq-item";

// type
type IFaq = {
  id: number;
  question: string;
  answer: string;
};
// faq data
export const faq_data: IFaq[] = [
  {
    id: 1,
    question: "What is embroidery digitizing?",
    answer:
      "Embroidery digitizing is the process of converting your logo or artwork into a machine-readable embroidery file so it can be stitched accurately on garments.",
  },
  {
    id: 2,
    question: "What is vector art?",
    answer:
      "Vector art is high-quality artwork used for screen printing, DTG, sublimation, and large-format printing. Vector files can be resized without losing quality.",
  },
  {
    id: 3,
    question: "Which file formats do you provide?",
    answer:
      "Digitizing: DST, PES, EMB, PNG and more.<br />Vector Art: AI, EPS, PDF, SVG, PSD, PNG.",
  },
  {
    id: 4,
    question: "What is your turnaround time?",
    answer:
      "Our standard turnaround time is 3 hours. Rush orders are also available.",
  },
  {
    id: 5,
    question: "Do you offer revisions?",
    answer:
      "Yes, we offer free revisions until you are fully satisfied.",
  },
  {
    id: 6,
    question: "Do you provide a money-back guarantee?",
    answer:
      "Yes, if the design does not meet your requirements, we offer a money-back guarantee.",
  },
  {
    id: 7,
    question: "Can you handle complex or small designs?",
    answer:
      "Absolutely. We specialize in complex designs, small lettering, 3D puff, and detailed artwork.",
  },
  {
    id: 8,
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes, our support team is available 24/7 to assist you with orders and inquiries.",
  },
  {
    id: 9,
    question: "How can I place an order?",
    answer:
      "You can place an order by sending your design through our website or email.",
  },
  {
    id: 10,
    question: "Are your designs machine-tested?",
    answer:
      "Yes, all designs are carefully checked to ensure smooth and clean stitching results.",
  },
  {
    id: 11,
    question: "What types of custom patches do you offer?",
    answer:
      "We offer all types of custom patches including embroidered, PVC, chenille, woven, leather, and printed patches.",
  },
  {
    id: 12,
    question: "Can I customize the size, shape, and backing?",
    answer:
      "Yes, patches can be fully customized in any size or shape with backing options like iron-on, sew-on, or Velcro.",
  },
  {
    id: 13,
    question: "What is your turnaround time for custom patches?",
    answer:
      "Our standard turnaround time for custom patches is 8–15 business days, with rush options available.",
  },
];

export default function FaqArea() {
  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Lorem ipsum dolor sit laud munere dicunt detraxit mel, nisl
                  evertitu <br /> eu vim.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{height:'auto'}}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search product" />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
