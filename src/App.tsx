import './App.css';
import { Tasks } from './Tasks';

function App() {
  const data1 = {
    title: 'What to do',
    tasks: [
      { taskId: 1, title: 'HTML&CSS2', isDone: true },
      { taskId: 2, title: 'JS2', isDone: true },
    ],
    students: [
      'Jago Wormald1',
      'Saul Milne2',
      'Aariz Hester3',
      'Dion Reeve4',
      'Anisa Ortega5',
      'Blade Cisneros6',
    ],
  };
  const data2 = {
    title: 'What to learn',
    tasks: [
      { taskId: 1, title: 'HTML&CSS', isDone: true },
      { taskId: 2, title: 'JS', isDone: true },
    ],
    students: [
      'Rick Kane',
      'Finnlay Bentley',
      'Samia North',
      'Isaac Morton',
      'Lily-Ann Clifford',
      'Thalia Park',
    ],
  };

  return (
    <div className='App'>
      <Tasks data={data1} />
      <Tasks data={data2} />
    </div>
  );
}

export default App;
