import React from "react";
import { HappyWeddingWrapper } from "./style";
import Navigation from "./Navigation";
import IntroWedding from "./IntroWedding";
import Information from "./Information";
import SliderWedding from "./SliderWedding";

const HappyWedding = () => {

  return (
    <HappyWeddingWrapper >
      <Navigation />
      <IntroWedding />
      <Information />
      <SliderWedding />


    </HappyWeddingWrapper>
  );
};

export default HappyWedding;
