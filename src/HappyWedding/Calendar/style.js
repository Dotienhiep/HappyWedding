import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-title-calendar {
    width: 100%;
  }
  .image-title-calendar img {
    width: 100%;
  }
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    width: 350px;
    text-align: center;
  }
  .day {
    padding: 10px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .heart {
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    color: red;
    font-size: 1.2em;
  }
`;
