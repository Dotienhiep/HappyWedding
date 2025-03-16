import styled from "styled-components";

export const IntroWeddingWrapper = styled.div`
  background-image: url("/assets/images/image-bg1.png");
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(
      255,
      255,
      255,
      0.5
    ); /* Màu trắng trong suốt để làm nhạt */
    z-index: 1;
  }
  .content-infor-wedding {
    height: 100vh;
    display: flex;
    position: relative;
    z-index: 11;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title-one {
    font-weight: bolder;
    font-size: 40px;
  }
  .title-two {
    font-weight: 700;
    font-size: 30px;
  }
  .image-infor-wedding {
    width: 180px;
    height: 300px;
    margin: 50px 0;
  }
  .image-infor-wedding img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 30px 10px rgba(255, 255, 255, 0.8);
  }

  .date-infor-wedding {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .date-infor-wedding .time-date {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
  }
  .date-infor-wedding .underline {
    margin: 0 10px;
    font-weight: bold;
  }
  .date-day {
    font-weight: bold;
    font-size: 35px;
  }
  .sub-date-day {
    margin: 20px 0;
    font-style: italic;
  }
  .text-lign {
    font-size: 25px;
  }
`;
