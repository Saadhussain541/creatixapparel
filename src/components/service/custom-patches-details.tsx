'use client';
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

// Service images array - using imported images
const images = [
  sv_1,
  sv_2,
  sv_3,
  sv_1,
  sv_2,
  sv_3,
  sv_1,
  sv_2,
  sv_3,
];

// Services data with Digitizing category
const services = [
  { id: 1, name: "Digitizing Service 1", category: "Embriodery Patches" },
  { id: 2, name: "Digitizing Service 2", category: "Pvc Patches" },
  { id: 3, name: "Digitizing Service 3", category: "Embriodery Patches" },
  { id: 4, name: "Vector Art Service 1", category: "Pvc Patches" },
  { id: 5, name: "Digitizing Service 4", category: "Chenille Patches  " },
  { id: 6, name: "Digitizing Service 5", category: "Leather Patches" },
  { id: 7, name: "Digitizing Service 6", category: "Leather Patches" },
  { id: 8, name: "Vector Art Service 2", category: "Woven Patches" },
];

export default function CustomPatchesDetials() {
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
  // Convert StaticImageData to slides format for yet-another-react-lightbox
  const lightboxSlides = useMemo(() => {
    return filteredServices.map((service, index) => {
      const img = images[index % images.length];
      
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
                 Custom Patches Service
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="offset-xl-4 col-xl-5">
                <div className="service-details__banner-text mb-80">
  <p className="mb-30 tp_title_anim">
    We specialize in custom patches, including embroidered, PVC, woven,
    and chenille patches.
  </p>
  <p className="tp_title_anim">
    From simple logos to detailed designs, our patches are crafted with
    premium materials and precise finishing, making them ideal for
    uniforms, branding, and promotional use.
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
                    src={sv_1}
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
              const imageIndex = index % images.length;
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
