import React from "react";
import { HappyWeddingWrapper } from "./style";
import Navigation from "./Navigation";
import IntroWedding from "./IntroWedding";
import Information from "./Information";
import SliderWedding from "./SliderWedding";
import DateTime from "./DateTime";
import Calendar from "./Calendar";
import AddressWedding from "./AddressWedding";

const HappyWedding = () => {

  return (
    <HappyWeddingWrapper >
      <Navigation />
      <IntroWedding />
      <Information />
      <SliderWedding />
      <DateTime />
      <Calendar />
      <AddressWedding />
      


    </HappyWeddingWrapper>
  );
};

export default HappyWedding;
