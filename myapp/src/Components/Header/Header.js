import React from 'react';
import style from './Header.module.css'
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Col>
      <div className={style.root}>Todo List</div>
      </Col>
    </Row>
  );
}

export default Header;
