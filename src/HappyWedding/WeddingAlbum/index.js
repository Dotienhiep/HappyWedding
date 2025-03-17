import React from "react";
import { WeddingAlbumWrapper } from "./style";

const images = [
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
  "/assets/images/happy.jpg",
];

const WeddingAlbum = () => {
  return (
    <WeddingAlbumWrapper>
      <div className="title-album">
        <span style={{ fontFamily: "'Dancing Script', cursive" }}>
          Album ảnh cưới ----------
        </span>
        <img src="/assets/images/icon-heart.png" alt="" />
      </div>
      <div className="list-album">
        {images.map((src, index) => (
          <div className="image-album-item" key={index}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </WeddingAlbumWrapper>
  );
};

export default WeddingAlbum;
