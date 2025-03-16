import React from "react";
import { NavigationWrapper } from "./style";

const Navigation = () => {
  return (
    <NavigationWrapper>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#information">Wedding</a>
          </li>
          <li>
            <a href="#about">Thông tin</a>
          </li>
          <li>
            <a href="#contact">Thư mời</a>
          </li>
        </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
