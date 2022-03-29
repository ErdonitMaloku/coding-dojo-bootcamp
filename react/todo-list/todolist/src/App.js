import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [Text, setText] = useState("");
  const [ToDoList, setToDoList] = useState([]);
  
  const createToDoList = (e) =>{
    e.preventDefault();

    setToDoList([...ToDoList,{
      Text: Text,
      checked: false
    }])

    setText("");

  };

  function completed(index){
    const obj={
      ...ToDoList[index]
    };
    obj.checked = !obj.checked;
    setToDoList([...ToDoList.slice(0,index),obj].concat(ToDoList.slice(index+1)));
  }

  function deleteToDo(i){
    setToDoList(ToDoList.filter((_item, index)=>index!==i));
  }


  return (
    <div className="App">
      <form onSubmit={createToDoList}>
        <div>
          <label>ToDo:</label>
          <input type="text" value={Text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <input type="submit" value="createToDo"/>
      </form>
      {
        ToDoList.map((item, index)=>
        <div>
          <p key={index}>{item.Text}</p>
          <input type="checkbox" checked={item.checked} onChange={(e)=>completed(index)}/>
          {
            item.checked?
            <p>completed</p>:
            <p>not complited</p>
          }

          <button onClick={()=>deleteToDo(index)}>Delete</button>

        </div>
        )
      }
    </div>
  );
}

export default App;
