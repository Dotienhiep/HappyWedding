import React from "react";
import { IntroWeddingWrapper } from "./style";

const IntroWedding = () => {
  return (
    <IntroWeddingWrapper id="information">
      <div className="content-infor-wedding">
        <div
          className="title-one"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Save the date
        </div>
        <div
          className="title-two"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Gia Mẫn ~ Tiến Hiệp
        </div>
        <div className="image-infor-wedding">
          <img src="/assets/images/happy.jpg" alt="" />
        </div>
        <div className="date-infor-wedding">
          <div className="time-date">
            <span>18:00</span>
            <span>Thứ bảy</span>
          </div>
          <div className="underline">|</div>
          <div className="date-day">12/04/2025</div>
        </div>
        <div className="sub-date-day">( Tức ngày 15/03/2025 âm lịch năm Ất Tỵ )</div>
        <div className="text-lign" style={{ fontFamily: "'Dancing Script', cursive" }}>Một hành trình mới bắt đầu từ hôm nay.</div>
      </div>
    </IntroWeddingWrapper>
  );
};

export default IntroWedding;
