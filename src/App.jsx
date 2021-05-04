import React, {Fragment, useState, useRef, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {TodoList} from './components/TodoList';

const KEY = 'todoApp.todos';

export function App() {
    const [todos, setTodos] = useState([
        {id: 1, task: 'Tarea 1', completed: false},
    ]);

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task === '') return;

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}]
        });

        todoTaskRef.current.value = null;
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    return(
        <div className="container">
            <Fragment>
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                <div className="primer-texto-padre">
                    <h2 className="primer-texto">Ingrese la tarea a realizar</h2>
                </div>
                <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" className="entrada"/>
                    <div className="contenedor-botones">
                        <div className="btn-add">
                            <button onClick={handleTodoAdd} className="btn-a"><i className="fas fa-plus"></i></button>
                        </div>
                        <div className="btn-delete">
                            <button onClick={handleClearAll} className="btn-d"><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                <div className="resultado-tareas">Le quedan {todos.filter((todo) => !todo.completed).length} tareas pendientes</div>
            </Fragment>
        </div>
    );
}