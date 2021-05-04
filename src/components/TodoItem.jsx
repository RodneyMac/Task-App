import React from 'react';

export function TodoItem({todo, toggleTodo}) {
    const {id, task, completed} = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }

    return (
        <li className="lista">
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            {task}
        </li>
    )
}
