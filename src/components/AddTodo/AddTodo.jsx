import { useState } from 'react';

export function AddTodo(props) {
  const [value, setValue] = useState('');

  function saveTodo() {
    props.setTodo([...props.todo, { id: 4, title: value, status: true }]);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Введите задачу'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  );
}
