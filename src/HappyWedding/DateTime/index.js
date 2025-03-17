import React from "react";
import { DateTimeWrapper } from "./style";

const DateTime = () => {
  return (
    <DateTimeWrapper>
      <div className="bride-groom-date">
        <div className="image-date">
          <img src="/assets/images/bride-icon.png" alt="" />
        </div>
        <div className="title-date">
          <div className="">Ngày tổ chức tiệc</div>
          <div className="">Thứ bảy || 18h00</div>
        </div>
        <div className="image-date">
          <img src="/assets/images/grooom-icon.png" alt="" />
        </div>
      </div>
      <div className="date-time-sub">12/04/2025</div>
      <div className="text-date-time-sub">( Tức ngày 15 tháng 3 năm 2025 )</div>
      <div className="btn-submit">
        <button type="">Gửi lời chúc phúc</button>
      </div>
      <div className="btn-submit">
        <button type="">Gửi mừng cưới</button>
      </div>
    </DateTimeWrapper>
  );
};

export default DateTime;
