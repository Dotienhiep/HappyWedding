import styled from "styled-components";

export const SliderWeddingWrapper = styled.div`
  /* bride */

  .slider-container {
    width: 80%;
    margin: auto;
  }
  .content-text-slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .content-text-slider .title-message {
    font-size: 25px;
    font-weight: bolder;
  }
  .content-text-slider .title-message-act {
    font-style: italic;
  }

  .mySwiper {
    padding: 20px 0;
    width: 400px;
  }

  .mySwiper img {
    width: 200px;
    height: auto;
  }

  .swiper-slide {
    transition: transform 0.3s ease-in-out;
  }

  .swiper-slide-active {
    transform: scale(1.2); /* Ảnh giữa phóng to hơn */
  }
`;
