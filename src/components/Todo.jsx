import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.task);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo(e){
        onUpdate(item.id, newValue);
        setIsEdit(false);

    }
    return (
      <Form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}> Modificar</button>
      </Form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo ">
        {item.task}
        <Button onClick={() => setIsEdit(true)} variant="primary" type="submit">
          Editar
        </Button>

        <Button onClick={(e)=>onDelete(item.id)} variant="primary" type="submit">
          Eliminar
        </Button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;
