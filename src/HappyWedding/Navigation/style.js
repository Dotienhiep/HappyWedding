import styled from "styled-components";

export const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 12px 0;
  z-index: 111;
  background-attachment: fixed;
  background-color: transparent;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 20px;
  }

  li {
    cursor: pointer;
  }
  li a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    padding: 8px 12px;
    transition: 0.3s;
  }
  li a:hover {
    color: #ff3233;
    cursor: pointer;
  }
`;
