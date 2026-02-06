'use client';
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// images
import b_1 from "@/assets/img/home-04/hero/hero-1.jpg"
import sv_1 from "@/assets/img/vector_img/vector_img1.png";
import sv_2 from "@/assets/img/vector_img/vector_img2.png";
import sv_3 from "@/assets/img/vector_img/vector_img3.png";
import sv_4 from "@/assets/img/vector_img/vector_img4.png";
import sv_5 from "@/assets/img/vector_img/vector_img5.png";
import sv_6 from "@/assets/img/vector_img/vector_img6.png";
import sv_7 from "@/assets/img/vector_img/vector_Img7.png";
import sv_8 from "@/assets/img/vector_img/vector_img8.png";
import sv_9 from "@/assets/img/vector_img/vector_img9.png";
import sv_10 from "@/assets/img/vector_img/vector_img10.png";
import sv_11 from "@/assets/img/vector_img/vector_img11.png";
import sv_12 from "@/assets/img/vector_img/vector_img12.png";
import sv_13 from "@/assets/img/vector_img/vector_img13.png";
import sv_14 from "@/assets/img/vector_img/vector_img14.png";
import sv_15 from "@/assets/img/vector_img/vector_img15.png";
import sv_16 from "@/assets/img/vector_img/vector_img16.png";
import sv_17 from "@/assets/img/vector_img/vector_img17.png";
import sv_18 from "@/assets/img/vector_img/vector_img18.png";
import sv_19 from "@/assets/img/vector_img/vector_img19.png";
import sv_20 from "@/assets/img/vector_img/vector_img20.png";
import sv_21 from "@/assets/img/vector_img/vector_img21.png";

// Service images array - using imported images
const images = [
  sv_1,
  sv_2,
  sv_3,
  sv_4,
  sv_5,
  sv_6,
  sv_7,
  sv_8,
  sv_9,
  sv_10,
  sv_11,
  sv_12,
  sv_13,
  sv_14,
  sv_15,
  sv_16,
  sv_17,
  sv_18,
  sv_19,
  sv_20,
  sv_21,

];

// Services data with Digitizing category
const services = [
  { id: 1, name: "Vector", category: "Complicated Vector" },
  { id: 2, name: "Vector", category: "Complicated Vector" },
  { id: 3, name: "Vector", category: "DTG Printing" },
  { id: 4, name: "Vector", category: "DTG Printing" },
  { id: 5, name: "Vector", category: "Simple Vector" },
  { id: 6, name: "Vector", category: "Simple Vector" },
  { id: 7, name: "Vector", category: "Simple Vector" },
  { id: 8, name: "Vector", category: "DTG Printing" },
  { id: 9, name: "Vector", category: "Complicated Vector" },
  { id: 10, name: "Vector", category: "Complicated Vector" },
  { id: 11, name: "Vector", category: "DTG Printing" },
  { id: 12, name: "Vector", category: "Complicated Vector" },
  { id: 13, name: "Vector", category: "Simple Vector" },
  { id: 14, name: "Vector", category: "Complicated Vector" },
  { id: 15, name: "Vector", category: "Simple Vector" },
  { id: 16, name: "Vector", category: "DTG Printing" },
  { id: 17, name: "Vector", category: "Complicated Vector" },
  { id: 18, name: "Vector", category: "Simple Vector" },
  { id: 19, name: "Vector", category: "Simple Vector" },
  { id: 20, name: "Vector", category: "Complicated Vector" },
  { id: 21, name: "Vector", category: "Complicated Vector" },
];

export default function VectorServiceDetails() {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from services
  const availableCategories = useMemo(() => {
    const categories = [...new Set(services.map(s => s.category))];
    return ['All', ...categories];
  }, []);

  // Filter services based on selected category
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') {
      return services;
    }
    return services.filter(service => service.category === selectedCategory);
  }, [selectedCategory]);

  // Get images array for lightbox based on filtered services
  // Use service.id to map to correct image (not filtered index)
  const lightboxSlides = useMemo(() => {
    return filteredServices.map((service) => {
      const img = images[(service.id - 1) % images.length];
      
      let imgSrc = '';
      
      // If already a string, use it
      if (typeof img === 'string') {
        imgSrc = img;
      } else if (img && typeof img === 'object') {
        // Extract src from StaticImageData object
        const src = (img as any).src;
        if (src && typeof src === 'string') {
          imgSrc = src;
        }
      }
      
      return {
        src: imgSrc,
        alt: service.name,
        title: service.name,
      };
    }).filter(slide => slide.src !== '');
  }, [filteredServices]);

  const handleOpen = (index: number) => {
    if (lightboxSlides.length > 0 && lightboxSlides[index]) {
      setPhotoIndex(index);
    }
  };

  useEffect(() => {
    if (photoIndex >= 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photoIndex]);

  return (
    <>
      <style jsx global>{`
        .service-details__area .service-filter-tabs {
          margin-bottom: 50px !important;
        }
        
        .service-details__area .service-filter-tabs .filter-menu-active {
          display: flex !important;
          flex-wrap: wrap !important;
          justify-content: center !important;
          gap: 15px !important;
          padding: 20px 0 !important;
          border-bottom: 2px solid #E6E6E6 !important;
        }
        
        .service-details__area .service-filter-tabs .filter-menu-active button {
          background: #F5F5F5 !important;
          border: 0 !important;
          border-radius: 50px !important;
          font-weight: 600 !important;
          font-size: 15px !important;
          padding: 12px 28px !important;
          color: #6B7280 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          position: relative !important;
          font-family: var(--title-font) !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
        }
        
        .service-details__area .service-filter-tabs .filter-menu-active button:hover {
          background: #0c6961 !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3) !important;
        }
        
        .service-details__area .service-filter-tabs .filter-menu-active button.active {
          background: #0c6961 !important;
          color: #ffffff !important;
          
        }
        
        .service-details__area .service-filter-tabs .filter-menu-active button.active:hover {
          background: #0c6961 !important;
          transform: translateY(-2px) !important;
          
        }
        
        .service-gallery-item {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 300px;
          cursor: pointer;
        }
        
        .service-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .service-gallery-item:hover img {
          transform: scale(1.1);
        }
        
        .service-gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-gallery-item:hover .service-gallery-overlay {
          opacity: 1;
        }
        
        .service-gallery-eye-icon {
          color: white;
          font-size: 32px;
          z-index: 10;
        }
        
        @media (max-width: 991px) {
          .service-details__area .service-filter-tabs {
            overflow-x: auto !important;
            overflow-y: hidden !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: thin !important;
            margin-left: -24px !important;
            margin-right: -24px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          
          .service-details__area .service-filter-tabs .filter-menu-active {
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            min-width: max-content !important;
          }
        }
        
        @media (max-width: 767px) {
          .service-details__area .service-filter-tabs .filter-menu-active {
            gap: 10px !important;
            padding: 15px 0 !important;
          }
          
          .service-details__area .service-filter-tabs .filter-menu-active button {
            font-size: 13px !important;
            padding: 10px 20px !important;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
          
          .service-gallery-item {
            height: 250px;
          }
        }
        
        @media (max-width: 575px) {
          .service-details__area .service-filter-tabs .filter-menu-active button {
            font-size: 12px !important;
            padding: 8px 16px !important;
          }
          
          .service-gallery-item {
            height: 200px;
          }
        }
        
        /* Custom scrollbar styling for better UX */
        .service-details__area .service-filter-tabs::-webkit-scrollbar {
          height: 6px !important;
        }
        
        .service-details__area .service-filter-tabs::-webkit-scrollbar-track {
          background: #f1f1f1 !important;
          border-radius: 10px !important;
        }
        
        .service-details__area .service-filter-tabs::-webkit-scrollbar-thumb {
          background: #22C55E !important;
          border-radius: 10px !important;
        }
        
        .service-details__area .service-filter-tabs::-webkit-scrollbar-thumb:hover {
          background: #16A34A !important;
        }
      `}</style>

      <div className="service-details__area service-details__space pt-200 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__title-box mb-40">
                <span className="service-details__subtitle tp-char-animation">
                  Creatix Apparel
                </span>
                <h4 className="sv-hero-title tp-char-animation">
                 Vector Art Service
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="offset-xl-4 col-xl-5">
                <div className="service-details__banner-text mb-80">
  <p className="mb-30 tp_title_anim">
    Our vector art services transform your logos and images into sharp,
    scalable, and print-ready vector files.
  </p>
  <p className="tp_title_anim">
    Whether for screen printing, sublimation, or large-format printing,
    we ensure crisp lines, accurate colors, and high-resolution results
    that look perfect at any size.
  </p>
</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__tab-wrapper text-center mb-120">
                <div className="service-details__tab-thumb">
                  <Image
                    data-speed="0.4"
                    src={b_1}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filter Section */}
        <div className="container">
          <div className="service-filter-tabs">
            <div className="filter-menu-active">
              {availableCategories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? 'active' : ''}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'All' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="row gy-4">
            {filteredServices.map((service, index) => {
              const imageIndex = (service.id - 1) % images.length;
              const currentImage = images[imageIndex];
              return (
                <div className="col-md-6 col-lg-4" key={service.id}>
                  <div className="service-gallery-item" onClick={() => handleOpen(index)}>
                    <Image
                      src={currentImage}
                      alt={service.name}
                      width={400}
                      height={300}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div className="service-gallery-overlay">
                      <i className="ri-eye-line service-gallery-eye-icon"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h5 className="mb-1">{service.name}</h5>
                    <span className="text-muted">{service.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={photoIndex >= 0}
          close={() => setPhotoIndex(-1)}
          index={photoIndex >= 0 ? photoIndex : 0}
          slides={lightboxSlides}
        />
      </div>
    </>
  );
}
