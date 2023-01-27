export type TodoType = {
  id: number;
  title: string;
  status: boolean;
};
type PropsType = {
  setTodo: Function;
  todo: Array<TodoType>;
};

export function TodoList(props: PropsType) {
  function deleteTodo(id: number) {
    let newTodo = props.todo.filter((item) => item.id !== id);

    props.setTodo(newTodo);
  }
  function statusTodo(id: number) {
    let newTodo = props.todo.filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    props.setTodo(newTodo);
  }
  return (
    <div>
      {props.todo.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}>Удалить</button>
          <button onClick={() => statusTodo(item.id)}>Закрыть/Открыть</button>
        </div>
      ))}
    </div>
  );
}
