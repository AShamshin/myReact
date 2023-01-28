import { useState } from 'react';

export type TodoType = {
  id: number;
  title: string;
  status: boolean;
};
export type PropsType = {
  setTodo: Function;
  todo: Array<TodoType>;
};

export function TodoList(props: PropsType) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  function deleteTodo(id: number) {
    let newTodo = props.todo.filter((item) => item.id !== id);

    props.setTodo(newTodo);
  }
  function statusTodo(id: number) {
    let newTodo = [...props.todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    props.setTodo(newTodo);
  }

  function editTodo(id: any, title: string) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id: number) {
    let newTodo = [...props.todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });

    props.setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div>
      {props.todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input onChange={(e) => setValue(e.target.value)} value={value} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <button onClick={() => saveTodo(item.id)}>Сохранить</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>Удалить</button>
              <button onClick={() => editTodo(item.id, item.title)}>
                Редактировать
              </button>
              <button onClick={() => statusTodo(item.id)}>
                Закрыть/Открыть
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
