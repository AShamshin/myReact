import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

export type FilterType = 'all' | 'dollars' | 'rubles';

function App() {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]);

  const [filter, setFilter] = useState<FilterType>('all');

  let currentMoney = money;

  if (filter === 'dollars') {
    currentMoney = money.filter((item) => item.banknots === 'Dollars');
  }
  if (filter === 'rubles') {
    currentMoney = money.filter((item) => item.banknots === 'RUBLS');
  }

  const onClickH = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return <Button moneys={currentMoney} onClickHStart={onClickH} />;
  // <div className='App'>
  //   <ul>
  //     {currentMoney.map((i, index) => {
  //       return (
  //         <li key={index}>
  //           <span>{i.banknots}</span>
  //           <span>{i.value}</span>
  //           <span>{i.number}</span>
  //         </li>
  //       );
  //     })}
  //   </ul>
  //   <div className='buttons'>
  //     <button onClick={() => onClickH('all')} className='button'>
  //       all
  //     </button>
  //     <button onClick={() => onClickH('rubles')} className='button'>
  //       rubles
  //     </button>
  //     <button onClick={() => onClickH('dollars')} className='button'>
  //       dollars
  //     </button>
  //   </div>
  // </div>
}

export default App;
