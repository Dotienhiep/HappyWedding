import React from "react";
import { AddressWeddingWrapper } from "./style";
import GoogleMapComponent from "./GoogleMapComponent/GoogleMapComponent";

const AddressWedding = () => {
  return (
    <AddressWeddingWrapper>
      <div className="image-icon-bride-groom">
        <img src="/assets/images/bride-groom-icon.png" alt="" />
      </div>
      <div
        className="title-first"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Địa chỉ tổ chức
      </div>
      <div className="title-second">Nhà hàng tiệc cưới AquaJardin</div>
      <div className="title-third">
        307 Lê Trang Long, Phường 13, quận Bình Thạnh
      </div>
      <GoogleMapComponent />
    </AddressWeddingWrapper>
  );
};

export default AddressWedding;
