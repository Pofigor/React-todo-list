import React from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import style from './AddTodo.module.css'


function AddTodo({ todo, setTodo }) {

  const [value, setValue] = React.useState('')

  function saveTodo() {
    if (value) {
      let _id = Math.round(Math.random() * (999 - 333) + 333);
      setTodo(
        [...todo, {
          id: _id,
          title: value,
          status: true
        }]
      )
      setValue('')
    }
  }

  return (
    <Row>
      <Col className={style.addTodoForm}>
        <FormControl placeholder="Введите задачу" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button type="submit" onClick={saveTodo} className={style.btn}>Сохранить</Button>
      </Col>
    </Row>
  )
}

export default AddTodo;
