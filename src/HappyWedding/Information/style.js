import styled from "styled-components";

export const InformationWrapper = styled.div`
  /* bride */
  .infor-bride {
    display: flex;
    justify-content: center;
  }
  .content-infor-bride {
    width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-infor-bride {
  }
  .content-text-bride {
    font-size: 25px;
    font-weight: bold;
  }

  .image-infor-bride {
    width: 210px;
    height: auto;
  }
  .image-infor-bride img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.8); /* Đậm hơn */
    border-radius: 4px;
  }
  .text-address {
    font-size: 20px;
    margin: 10px 0 0 0;
    text-align: center;
  }
  .image-icon-bride {
    width: 80px;
    height: 80px;
  }
  .image-icon-bride img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* groom */
  .infor-groom {
    display: flex;
    justify-content: center;
  }
  .content-infor-groom {
    width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-infor-groom {
  }
  .content-text-groom {
    font-size: 25px;
    font-weight: bold;
  }

  .image-infor-groom {
    width: 210px;
    height: auto;
  }
  .image-infor-groom img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.8); /* Đậm hơn */
    border-radius: 4px;
  }
  .image-icon-groom {
    width: 80px;
    height: 80px;
  }
  .image-icon-groom img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
