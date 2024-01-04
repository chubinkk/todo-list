import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 32px;
    color: #343a40;
  }
  h2 {
    margin: 0;
    font-size: 32px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
const today = new Date();
const formattedDate = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일`;

const day = ["일", "월", "화", "수", "목", "금", "토"];
const formattedDay = `${day[today.getDay()]}요일`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>{formattedDate}</h1>
      <div className="day">{formattedDay}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
