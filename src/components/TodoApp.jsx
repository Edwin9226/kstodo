import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Todo from './Todo';

import  '../styles/todoApp.css'


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
            const temp= todo.filter(item=> item.id !== id);
            setTodo(temp);
            setTask("");

        }
  return (
    <div className='todoContainer'>
        <Form className='todoCreateForm' onSubmit={handleSubmit}>
      
       
        <Form.Control className='todoInput'  type="input" value={task} placeholder="Ingrese una tarea" onChange={handleChange} />
   
      <Button className='buttonCreate'
      onClick={handleSubmit} 
      variant="primary" 
      value={"Create Todo"} 
      type="submit">
        Agregar
      </Button>

    </Form>
    <div className='todosContainer'>
       { todo.map((item)=>(
            <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
        ) )}
    </div>

    </div>
  )
}

export default TodoApp