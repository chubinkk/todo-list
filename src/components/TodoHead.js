import React from "react";
import styled from "styled-components";
import { useTodoState } from "../redux/TodoContext";

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
  .progress-bar {
    width: 100%;
    height: 30px;
    background-color: #dedede;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.8rem;
    margin-top: 20px;
    overflow: hidden;
  }
  .progress {
    width: ${(props) => props.progressWidth};
    height: 30px;
    padding: 0;
    text-align: center;
    background-color: #20c997;
    color: #111;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undonetasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  const progressWidth = `${100 - (undonetasks.length * 100) / todos.length}%`;

  return (
    <TodoHeadBlock progressWidth={progressWidth}>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undonetasks.length}개 남음</div>
      <div className="progress-bar">
        <div className="progress" />
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
