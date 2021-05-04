import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({todos, toggleTodo}) {
    return (
        <div className="contenedor-lista-padre">
            <ul className="contenedor-lista">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
                ))}
            </ul>
        </div>
    );
}
