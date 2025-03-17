import React from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 420px;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background: white;
  display: flex;
  flex-direction: column;
`;

const MonthTitle = styled.h2`
  margin: 0;
  padding: 10px;
  background: #333;
  color: white;
  border-radius: 5px;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
`;

const Day = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-weight: bold;
  ${({ isHeart }) =>
    isHeart
      ? `background: pink; border: 2px solid red; color: red;`
      : `background: #f5f5f5; border: 1px solid #ddd;`}
`;

const AprilCalendar = () => {
  const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
  const heartDays = [12];

  // Các ngày trong tháng 4/2025, ngày 1 bắt đầu từ thứ Ba
  const dates = [
    ["", "1", "2", "3", "4", "5", "6"],
    ["7", "8", "9", "10", "11", "12", "13"],
    ["14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27"],
    ["28", "29", "30", "", "", "", ""]
  ];

  return (
    <CalendarContainer>
      <MonthTitle>Tháng 4 - 2025</MonthTitle>
      <DaysGrid>
        {daysOfWeek.map((day) => (
          <Day key={day} style={{ fontWeight: "bold", background: "#ddd" }}>
            {day}
          </Day>
        ))}
        {dates.flat().map((date, index) => (
          <Day key={index} isHeart={heartDays.includes(Number(date))}>
            {date}
          </Day>
        ))}
      </DaysGrid>
    </CalendarContainer>
  );
};

export default AprilCalendar;
