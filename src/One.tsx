import { useState } from 'react';

export function One() {
  let [data, setData] = useState(0);
  return (
    <div className='one'>
      <input type='text' value={data} />
      <div>
        <span>
          <button
            onClick={() => {
              setData(data + 1);
              console.log(data);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setData(data - 1);
              console.log(data);
            }}
          >
            -
          </button>
        </span>
      </div>
    </div>
  );
}
