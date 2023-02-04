import { FilterType } from '../App';

type PropsType = {
  onClickHStart: (onClickH: FilterType) => void;
  moneys: CurrentType[];
};

type CurrentType = {
  banknots: string;
  value: number;
  number: string;
};

export const Button = (props: PropsType) => {
  return (
    <div className='App'>
      <ul>
        {props.moneys.map((i: CurrentType, index: number) => {
          return (
            <li key={index}>
              <span>{i.banknots}</span>
              <span>{i.value}</span>
              <span>{i.number}</span>
            </li>
          );
        })}
      </ul>
      <div className='buttons'>
        <button onClick={() => props.onClickHStart('all')} className='button'>
          all
        </button>
        <button
          onClick={() => props.onClickHStart('rubles')}
          className='button'
        >
          rubles
        </button>
        <button
          onClick={() => props.onClickHStart('dollars')}
          className='button'
        >
          dollars
        </button>
      </div>
    </div>
  );
};
