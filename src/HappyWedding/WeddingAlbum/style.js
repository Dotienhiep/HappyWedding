import styled from "styled-components";

export const WeddingAlbumWrapper = styled.div`
  .title-album {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
  .title-album span {
    font-size: 30px;
  }
  .title-album img {
    width: 50px;
    height: 50px;
  }
  .list-album {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px; /* Chiều cao cơ bản cho mỗi hàng */
    gap: 5px;
    max-width: 420px;
    margin: 20px auto;
    grid-auto-flow: dense; /* Giúp lấp đầy khoảng trống */
  }

  .image-album-item {
    display: flex;
  }

  .image-album-item img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover; /* Đảm bảo ảnh không bị méo */
    border-radius: 3px;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.8); /* Đậm hơn */
  }

  /* Tùy chỉnh chiều cao ảnh */
  .image-album-item:nth-child(1) {
    grid-row: span 2; /* Ảnh đầu tiên to hơn */
  }
  .image-album-item:nth-child(2) {
    grid-row: span 1;
  }
  .image-album-item:nth-child(3) {
    grid-row: span 2;
  }
  .image-album-item:nth-child(4) {
    grid-row: span 2;
  }
  .image-album-item:nth-child(5) {
    grid-row: span 1;
  }
  .image-album-item:nth-child(6) {
    grid-row: span 1;
  }
  .image-album-item:nth-child(7) {
    grid-row: span 2;
  }
  .image-album-item:nth-child(8) {
    grid-row: span 2;
  }
  .image-album-item:nth-child(9) {
    grid-row: span 1;
  }
  .image-album-item:nth-child(10) {
    grid-row: span 1;
  }
  .image-album-item:nth-last-child() {
    grid-row: span 1;
  }
`;
