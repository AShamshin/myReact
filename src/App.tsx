import { useState } from 'react';
import './App.css';

import { Button } from './components/Button';

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

  let currentMoney = money.filter((item) => item.banknots === 'RUBLS');

  return (
    <div className='App'>
      <ul>
        {currentMoney.map((i, index) => {
          return (
            <li key={index}>
              <span>{i.banknots}</span>
              <span>{i.value}</span>
              <span>{i.number}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
