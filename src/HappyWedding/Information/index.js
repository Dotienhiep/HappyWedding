import React from "react";
import { InformationWrapper } from "./style";

const Information = () => {
  return (
    <InformationWrapper>
      <div className="infor-bride">
        <div className="content-infor-bride">
          <div
            className="content-text-bride"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Nhà Gái
          </div>
          <div
            className="content-text-bride"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ông Cao Thanh Tâm
          </div>
          <div
            className="content-text-bride"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Bà Lê Thị Trâm Anh
          </div>
          <div
            className="text-address"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            38 Nguyễn Xuân Ôn, p2, Bình Thạnh, Hồ Chí Minh.
          </div>
          <div className="image-icon-bride">
            <img src="/assets/images/bride-icon.png" alt="" />
          </div>
          <div
            className="content-text-bride"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Cô dâu
          </div>
          <div
            className="content-text-bride"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Cao Gia Mẫn
          </div>
        </div>
        <div className="image-infor-bride">
          <img src="/assets/images/happy.jpg" alt="" />
        </div>
      </div>
      <div className="infor-groom">
        <div className="image-infor-groom">
          <img src="/assets/images/happy.jpg" alt="" />
        </div>
        <div className="content-infor-groom">
          <div
            className="content-text-groom"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Nhà Trai
          </div>
          <div
            className="content-text-groom"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ông Đỗ Thanh Tỳ
          </div>
          <div
            className="content-text-groom"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Bà Đoàn Thị Hơn
          </div>
          <div
            className="text-address"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Xóm 6, Nam Điền, Nghĩa Hưng, Nam Định.
          </div>
          <div className="image-icon-groom">
            <img src="/assets/images/grooom-icon.png" alt="" />
          </div>
          <div
            className="content-text-bride"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Chú rể
          </div>
          <div
            className="content-text-bride"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Đỗ Tiến Hiệp
          </div>
        </div>
      </div>
    </InformationWrapper>
  );
};

export default Information;
