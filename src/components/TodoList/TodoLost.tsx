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
  return <div>TodoList</div>;
}
