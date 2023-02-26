import { v1 } from 'uuid';
import React, { useState } from 'react';

export function Todolist() {
  let [buhlo, setBuhlo] = useState<any>([
    { id: v1(), title: 'Пиво', isDone: true },
    { id: v1(), title: 'Водка', isDone: true },
    { id: v1(), title: 'Вискарик', isDone: false },
  ]);

  let [text, setText] = useState<any>('');

  const onChangeHandler = (e: any) => {
    text = e.currentTarget.value;
    setText(text);
  };

  const addOnClickHandler = (text: any) => {
    let addBuhlo = { id: v1(), title: text, isDone: false };
    buhloFilter = [addBuhlo, ...buhloFilter];
    setBuhlo(buhloFilter);
    setText('');
  };

  const removOnClickHandler = (id: any) => {
    let removBuhlo = buhloFilter.filter((b: any) => b.id !== id);
    setBuhlo(removBuhlo);
  };

  let [filter, setfilter] = useState<any>('all');

  let buhloFilter = buhlo;
  if (filter === 'completed') {
    buhloFilter = buhlo.filter((b: any) => b.isDone === true);
  } else if (filter === 'active') {
    buhloFilter = buhlo.filter((b: any) => b.isDone === false);
  }

  const checkedHandler = (idd: any) => {
    buhlo = buhlo.map((b: any) =>
      b.id === idd ? { ...b, isDone: !b.isDone } : b
    );
    return setBuhlo([...buhlo]);
  };

  return (
    <div>
      <h1>BUHLOLIST</h1>

      <div>
        <input onChange={onChangeHandler} value={text} />
        <button onClick={() => addOnClickHandler(text)}>
          <b>+</b>
        </button>
      </div>
      <ul>
        {buhloFilter.map((b: any) => {
          return (
            <li key={b.id}>
              <input
                type='checkbox'
                checked={b.isDone}
                onChange={() => checkedHandler(b.id)}
              />
              {b.title}
              <button onClick={() => removOnClickHandler(b.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => setfilter('all')}>Купленное</button>
        <button onClick={() => setfilter('completed')}>Выпитое</button>
        <button onClick={() => setfilter('active')}>Не выпитое</button>
      </div>
    </div>
  );
}
