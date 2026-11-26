import axios from 'axios'
import './App.css'
import { Practice1 } from './practoces/Practice1'
import { Practice2 } from './practoces/Practice2'
import { Practice3 } from './practoces/Practice3'
import { Practice4 } from './practoces/Practice4'
import { useState } from 'react'
import { Todo } from './Todo'
import type { TodoType } from './types/todo'



function App() {

  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {        
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      res.data.map((log) => console.log(log.id));
      setTodos(res.data);
    });
  };

  return (
    <>
      <button onClick={() => onClickFetchData()}></button>
      {todos.map((todo) => {
        return(
          <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
        )
      })}

      <Practice1/>
      <Practice2/>
      <Practice3/>
      <Practice4/>

    </>
  )
}

export default App
