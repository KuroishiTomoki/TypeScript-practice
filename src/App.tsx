import axios from 'axios'
import './App.css'
import { Practice1 } from './practoces/Practice1'
import { Practice2 } from './practoces/Practice2'
import { Practice3 } from './practoces/Practice3'
import { Practice4 } from './practoces/Practice4'
import { useState } from 'react'
import { Todo } from './Todo'
import type { TodoType } from './types/todo'
import { Text } from './Text'
import { UserProfile } from './UserProfile'
import type { User } from './types/user'
import { UserCard } from './components/UserCard'
import type { UserProfileType } from './types/userProfile'
import { useAllUsers } from './hooks/useAllUsers'


const user:User = {
  name:"ジャケ",
  hobbies:["映画", "筋トレ"]
}


const userProfile:UserProfileType = {
    userId: 1,
    name: "シャケ",
    email: "mausuraion100@gmail.com",
    address: "東京都渋谷区東4-7-13 プリモ広尾103号室"
}

function App() {
  const {getUsers, users, loading, error} = useAllUsers();

  const [todos, setTodos] = useState<Array<TodoType>>([]);
 
  const onClickFetchData = () => {        
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      res.data.map((log) => console.log(log.id));
      setTodos(res.data);
    });
  };  

  const onClickFetchUserData = () => {
    getUsers();
  }

  return (
    <>
      <UserCard user={userProfile}/>
      <button onClick={() => onClickFetchUserData()}>ユーザーデータ取得</button>
      <br/>
      {error ? (<p>エラーが発生しました</p>) : loading ? (
        <p>ローディング</p>
      ) : (
        <>
          {users.map((user) => {
            return(
              <>
                <UserCard key={user.userId} user={user} />
              </>
            )
          })}
        </>
      ) }

      <Text color="red" fontSize="32px"/>

      <UserProfile user={user}/>


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
