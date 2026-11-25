import axios from 'axios'
import './App.css'
import { Practice1 } from './practoces/Practice1'
import { Practice2 } from './practoces/Practice2'
import { Practice3 } from './practoces/Practice3'
import { Practice4 } from './practoces/Practice4'

function App() {

  const onClickFetchData = () => {
    alert("d");
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <button onClick={() => onClickFetchData()}></button>

      <Practice1/>
      <Practice2/>
      <Practice3/>
      <Practice4/>

    </>
  )
}

export default App
