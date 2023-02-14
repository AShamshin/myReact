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
  console.log(filter);
  let currentMoney = money;

  if (filter === 'dollars') {
    currentMoney = money.filter((item) => item.banknots === 'Dollars');
  }
  console.log(currentMoney);
  if (filter === 'rubles') {
    currentMoney = money.filter((item) => item.banknots === 'RUBLS');
  }

  const onClickH = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return <Button moneys={currentMoney} onClickHStart={onClickH} />;
}

export default App;
