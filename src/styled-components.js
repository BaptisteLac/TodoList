import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Button = styled.div`
    display:inline-block;
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    height: 30px;
    width: 50px;
    border-radius: 2px;
    cursor: pointer;
`

export const Text = styled.input`
    border: 2px solid #000;
    width: 200px;
    padding: 5px;
    border-radius: 2px;
    margin: 5px;
`

export const TaskCount = styled.span`
  margin: 10px;
`

export const Tasks = styled.div`
`

export const TaskList = styled.li`
    listStyle: "none";
    text-decoration: "line-through";
`