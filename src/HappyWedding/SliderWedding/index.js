import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SliderWeddingWrapper } from "./style";

const images = [
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
];

const SliderWedding = () => {
  return (
    <SliderWeddingWrapper className="slider-container">
      <div className="content-text-slider">
        <span
          className="title-message"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Thư mời
        </span>
        <span className="title-message-act">
          Tới tham dự tiệc cưới của Hiệp và Mẫn
        </span>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Hiển thị 3 ảnh
        loop={true} // Lặp vô hạn
        slideToClickedSlide={true} // Nhấn vào ảnh nào, chuyển đến ảnh đó
        speed={500} // 🛠 Điều chỉnh tốc độ để tránh giật lag
        watchSlidesProgress={true} // Theo dõi tiến trình slide
        watchSlidesVisibility={true} // Đảm bảo hiển thị đúng slide
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWeddingWrapper>
  );
};

export default SliderWedding;
