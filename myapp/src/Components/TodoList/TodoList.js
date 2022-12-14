import React from 'react'
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import style from './TodoList.module.css'


function TodoList({ todo, setTodo }) {

  const [edit, setEdit] = React.useState(null);

  const [value, setValue] = React.useState('');

  const [filtered, setFiltered] = React.useState(todo);

  React.useEffect(() => {
    setFiltered(todo)
  }, [todo])


  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
      if (item.id == id) {
        item.status = !item.status
      }
      return item
    })
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id)
    setValue(title)
  }

  function saveTodo(id) {
    let newTodo = [...todo].map(item => {
      if (item.id === id) {
        item.title = value
      }
      return item
    })
    setTodo(newTodo)
    setEdit(null)
  }

  function todoFilter(status) {
    if (status === 'all') {
      setFiltered(todo)
    } else {
      let newTodo = [...todo].filter(item => item.status === status)
      setFiltered(newTodo)
    }
  }



  return (
    <div>

      <Row>
        <Col className={style.filter}>
          <ButtonGroup aria-label="Basic example" className={style.btns}>
            <Button variant="secondary" className={style.filterBtn} onClick={() => todoFilter('all')}>Все</Button>
            <Button variant="secondary" className={style.filterBtn} onClick={() => todoFilter(true)}>Открытые</Button>
            <Button variant="secondary" className={style.filterBtn} onClick={() => todoFilter(false)}>Закрытые</Button>
          </ButtonGroup>
        </Col>
      </Row>

      {
        filtered.map(item => (
          <>
            <div key={item.id} className={style.listItems}>
              {
                edit == item.id ?
                  (
                    <div>
                      <input value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                  )

                  :

                  (
                    <div className={!item.status ? style.close : ''}>{item.title}</div>
                  )
              }

              {
                edit == item.id ?
                  (
                    <div>
                      <Button onClick={() => saveTodo(item.id)}><i class="fa fa-floppy-o" aria-hidden="true"></i></Button>
                    </div>
                  )
                  :
                  (
                    <div>

                      <Button onClick={() => deleteTodo(item.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></Button>
                      <Button onClick={() => editTodo(item.id, item.title)} className={style.btn}><i class="fa fa-pencil" aria-hidden="true"></i></Button>
                      <Button onClick={() => statusTodo(item.id)} className={style.btn}>

                        {
                          item.status
                            ? (<i class="fa fa-unlock-alt" aria-hidden="true"></i>)
                            : (<i class="fa fa-lock" aria-hidden="true"></i>)
                        }
                      </Button>

                    </div>
                  )
              }


            </div>
          </>
        ))
      }
    </div>
  )
}

export default TodoList;
