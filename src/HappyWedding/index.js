import React, {useEffect, useRef, useState} from "react";
import { HappyWeddingWrapper } from "./style";
import Navigation from "./Navigation";
import IntroWedding from "./IntroWedding";
import Information from "./Information";
import SliderWedding from "./SliderWedding";
import DateTime from "./DateTime";
import Calendar from "./Calendar";
import AddressWedding from "./AddressWedding";
import WeddingAlbum from "./WeddingAlbum";

const HappyWedding = () => {
  const AnimateOnScroll = ({ children, animationClass = "fade-in" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(elementRef.current);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "-80px 0px",
        }
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  
    // Use CSS classes instead of inline styles to prevent overriding
    return (
      <div
        ref={elementRef}
        className={`animate-section ${
          isVisible ? animationClass : "hidden-section"
        }`}
      >
        {children}
      </div>
    );
  };
  const images = [
    "/assets/images/happy.jpg",
    "/assets/images/happy.jpg",
    "/assets/images/happy.jpg",
    "/assets/images/happy.jpg",
    "/assets/images/happy.jpg",
    "/assets/images/happy.jpg",

  ];
  useEffect(() => {
    // Add the animation CSS classes
    const style = document.createElement("style");
    style.textContent = `
      .animate-section {
        position: relative;
      }
      .hidden-section {
        opacity: 0;
        transform: translateY(30px);
      }
      .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <HappyWeddingWrapper>
      <Navigation />
      <IntroWedding />
      <AnimateOnScroll>
      <Information />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <SliderWedding />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <DateTime />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <Calendar />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <AddressWedding />
      </AnimateOnScroll>
      <AnimateOnScroll>
      <WeddingAlbum images = {images} />
      </AnimateOnScroll>
      
    </HappyWeddingWrapper>
  );
};

export default HappyWedding;
