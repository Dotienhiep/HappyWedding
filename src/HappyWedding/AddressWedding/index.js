import React from 'react'
import { AddressWeddingWrapper } from './style'
import GoogleMapComponent from "./GoogleMapComponent/GoogleMapComponent";

const AddressWedding = () => {
  return (
    <AddressWeddingWrapper>
        <div className="image-icon-bride-groom">
            <img src="/assets/images/bride-groom-icon.png" alt=""/>
        </div>
        <GoogleMapComponent />

    </AddressWeddingWrapper>
  )
}

export default AddressWedding