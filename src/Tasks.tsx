type DataType = {
  title: string;
  tasks: Array<TasksType>;
  students: Array<string>;
};
type TasksType = {
  taskId: number;
  title: string;
  isDone: boolean;
};

type TasksPropsType = {
  data: DataType;
};

export const Tasks = (props: TasksPropsType) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <ul>
        {props.data.tasks.map((t) => (
          <li>
            <span>{t.taskId}</span>
            <span>{t.title}</span>
            <span>{t.isDone}</span>
          </li>
        ))}
      </ul>
      <ul>
        {props.data.students.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};
