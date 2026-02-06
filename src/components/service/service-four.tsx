import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Fast Turnaround Time",
    desc: "Get your digitizing and vector files delivered in as little as 3 hours without compromising on quality.",
    category: ["Research", "Ui/ UX", "Prototyping"],
  },
  {
    id: 2,
    title: "Money-Back Guarantee",
    desc: "Your satisfaction comes first. If you’re not happy with the result, we offer a money-back guarantee.",
    category: ["SEO", "Creative Development", "Varcel"],
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    desc: "We’re available 24/7 to assist you with orders, revisions, and any questions you may have",
    category: ["Creative", "Digital strategy", "MVP"],
  },
];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Why brands choose us
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                 Quality digitizing, <br /> vector art & custom patches
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-4 col-lg-4">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  {/* <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div> */}
                </div>
              </div>
              {/* <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="/service"
                  >
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
