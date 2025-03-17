import styled from "styled-components";

export const AddressWeddingWrapper = styled.div`
  border: 1px solid red;
  width: 420px;
  border-radius: 50% 50% 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-icon-bride-groom {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  .image-icon-bride-groom img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title-first {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .title-second {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
  }
  .title-third {
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
  }
`;
