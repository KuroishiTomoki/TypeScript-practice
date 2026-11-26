import type { TodoType } from "./types/todo";



export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
  const {title, userId, completed} = props;
  const completeText = completed ? "[完]":"[未]";

  return (
    <>
      <p>{`${completeText}${title}(ユーザー：${userId})`}</p>
    </>   
  )
}   
