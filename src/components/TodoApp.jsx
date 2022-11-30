import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Todo from './Todo';


const TodoApp = () => {

    const [task, setTask]= useState("");
    const [todo, setTodo]= useState([]);



    function handleChange(e){
        const value= e.target.value;
        setTask(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo={
            id: crypto.randomUUID(),
            task: task,
            completed: false
            };
        
            setTodo([...todo, newTodo]);
           
        }

        function handleUpdate(id, value){
            const temp= [...todo];
            const item = temp.find((item)=> item.id===id);
            item.task= value;
            setTodo(temp);


        }
    
        function handleDelete(id){
            const temp= todo.filter(item=> item.id != id);
            setTodo(temp);
            setTask("");

        }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Tarea:</Form.Label>
        <Form.Control  type="input" value={task} placeholder="Ingrese una tarea" onChange={handleChange} />
      </Form.Group>
      <Button 
      onClick={handleSubmit} 
      variant="primary" 
      value={"Create Todo"} 
      type="submit">
        Agregar
      </Button>

    </Form>
    <div>
       { todo.map((item)=>(
            <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
        ) )}
    </div>

    </div>
  )
}

export default TodoApp