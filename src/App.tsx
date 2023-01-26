import { useState } from 'react';
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
    <div className='App'>
      <Header />
      <AddTodo />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
