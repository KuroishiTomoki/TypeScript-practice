import type { FC } from "react";
import type { TodoType } from "./types/todo";



export const Todo:FC<Pick<TodoType, "userId" | "title" | "completed">> = (props) => {
  const {title, userId, completed} = props;
  const completeText = completed ? "[完]":"[未]";

  return (
    <>
      <p>{`${completeText}${title}(ユーザー：${userId})`}</p>
    </>   
  )
}   
