import React, {useState} from 'react';
import './App.css';
import "./index.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Text, Button, Tasks, TaskCount, TaskList, InputContainer, Title, CheckboxContainer } from './styled-components';


function App() {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);


  const handleClick = () => {
      const id = todoList.length + 1;
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: input,
          complete: false,
        }
      ]);
      setInput("");
    };


  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            setCompletedTaskCount(completedTaskCount - 1);
        }
item = { ...task, complete: !task.complete };
      } else item = { ...task };
return item;
    });
    setTodoList(list);
  };


  const Checkbox = () => {
    const [checked, setChecked] = useState(false);
    const onChange = (event) => {
      setChecked(event.target.checked)
    }

    return (
      <CheckboxContainer>
        <input type="checkbox" checked={checked} onChange={onChange}/>
        {checked && (
          <svg data-src="https://s2.svgbox.net/materialui.svg?ic=check" width="32" height="32" color="#000"></svg>
        )}
      </CheckboxContainer>
    )
  }

  const ClearTask = () => {
    return (
      <FontAwesomeIcon icon={faTrash} />
    )
  }


return (
    <Container>
          <Title>What I need to do ?</Title>
          <InputContainer>
            <Text value={input} onInput={(e) =>setInput(e.target.value)} placeholder={'New task'}/>
            <Button onClick={() => handleClick()}>Add</Button>
          </InputContainer>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks</b> {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks</b> {completedTaskCount}
          </TaskCount>
        </Tasks>
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <TaskList
                  complete = {todo.complete}
                  id={todo.id}
                  onClick={() => handleComplete(todo.id)}
                >
                  <Checkbox/>
                  {todo.task}
                  <ClearTask/>
                </TaskList>
              );
            })}
          </ul>
        </div>
    </Container>
  );
};

export default App;