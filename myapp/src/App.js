// import './App.css';
import React from 'react'
import AddTodo from './Components/AddTodo/AddTodo';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import { Container } from 'react-bootstrap'

function App() {

  const [todo, setTodo] = React.useState([
    {
      id: 1,
      title: 'first deal',
      status: true,
    },
    {
      id: 2,
      title: 'second deal',
      status: true,
    },
    {
      id: 3,
      title: 'third deal',
      status: true,
    },
    {
      id: 4,
      title: 'fourth deal',
      status: true,
    },
    {
      id: 5,
      title: 'fifth deal',
      status: false,
    }
  ])

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
