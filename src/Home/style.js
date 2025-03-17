import styled from "styled-components";

export const HomeWrapper = styled.div`
  /* Introduce.module.css */

  /* 🔹 Container chính */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url("/assets/images/happy.jpg"); /* Pink background */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 16px;
  }

  /* 🔹 Card chứa nội dung */
  .card {
    max-width: 400px;
    padding: 24px;
    background: white;
    border-radius: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: fadeIn 0.6s ease-out;
  }

  /* 🔹 Tiêu đề */
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #d81b60; /* Dark pink */
  }

  /* 🔹 Đoạn văn bản */
  .text {
    margin-top: 8px;
    font-size: 16px;
    color: #555;
  }

  /* 🔹 Đoạn văn bản nhấn mạnh */
  .highlightText {
    font-size: 30px;
    font-weight: bold;
    color: #333;
  }

  /* 🔹 Nút bấm */
  .button {
    margin-top: 16px;
    padding: 10px 20px; /* Pink button */
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s;
  }

  /* 🔹 Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  button a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
  button a .icon-confirm {
    width: 40px;
    height: 40px;
  }
  button a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
