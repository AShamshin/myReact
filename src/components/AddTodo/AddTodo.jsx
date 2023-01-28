import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Col, Row } from 'react-bootstrap';
export function AddTodo(props) {
  const [value, setValue] = useState('');

  function saveTodo() {
    props.setTodo([
      ...props.todo,
      { id: uuidv4(), title: value, status: true },
    ]);
    setValue('');
  }

  return (
    <Row>
      <Col>
        <div>
          <input
            type='text'
            placeholder='Введите задачу'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={saveTodo}>Сохранить</button>
        </div>
      </Col>{' '}
    </Row>
  );
}
