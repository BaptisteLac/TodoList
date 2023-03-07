import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: blue;
    gap: 0.5rem;
`

export const Title = styled.h2`
    color: white;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 20rem;
    height: 2rem;
    background-color: yellow;
`

export const Button = styled.div`
    padding: 0.6em 1.2em;
    border-radius: 0.375em;
    cursor: pointer;
    color: white;
    font-weight: bold;
    background-image: linear-gradient(to right, #44A08D 0%, #093637  51%, #44A08D  100%); 
    background-size: 200% auto;
    transition: 0.5s;
    text-transform: uppercase;

    :hover {
        background-position: right center;
    }
`

export const Text = styled.input`
    padding: 0.7em 2em;
    border-radius: 0.375em;
`

export const TaskCount = styled.span`
    color: white;
    font-weight: bold;
    background-color: pink;
`

export const Tasks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    height: 2rem;
    background-color: green;
`

export const TaskList = styled.li`
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 20rem;
    height: 2rem;
    background-color: orange;
`

export const CheckboxContainer = styled.div`
    border: 2px solid white;
    border-radius: 4px;
    background-color: black;
    width: 16px;
    height: 16px;
    position: relative;
    color: black;

        input {
            opacity: 0;
            position: absolute;
            inset: 0;
        }
`