import { Col, Row } from 'react-bootstrap';
import s from './Header.module.css';

export function Header() {
  return (
    <Row>
      <Col>
        <div className={s.root}>Todo List</div>
      </Col>
    </Row>
  );
}
