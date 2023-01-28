import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { AddTodo } from './components/AddTodo/AddTodo';
import { Header } from './components/Header/Header';
import { TodoList, TodoType } from './components/TodoList/TodoLost';

function App() {
  const [todo, setTodo] = useState<Array<TodoType>>([
    { id: 1, title: 'first todo', status: true },
    { id: 2, title: 'second todo', status: true },
    { id: 3, title: 'third todo', status: false },
  ]);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
