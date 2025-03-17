import styled from "styled-components";

export const DateTimeWrapper = styled.div`
  margin-top: 20px;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  border-radius: 20px;
  .bride-groom-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .image-date {
    width: 100px;
    height: 100px;
    margin-top: 30px;
  }
  .image-date img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title-date {
    display: flex;
    flex-direction: column;
  }
  .title-date > div {
    color: #ff3233;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
  }
  .date-time-sub {
    font-size: 25px;
    font-weight: bolder;
  }
  .text-date-time-sub {
    font-style: italic;
    margin-bottom: 10px;
  }
  .btn-submit {
    width: 70%;
    height: 50px;
    margin-top: 10px;
  }
  .btn-submit button {
    width: 100%;
    outline: none;
    background-color: #ff3233;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 0;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.8); /* Đậm hơn */
  }
  .btn-submit button:hover {
    color: #000;
    opacity: 0.8;
    transition: all 0.3s;
  }
`;
