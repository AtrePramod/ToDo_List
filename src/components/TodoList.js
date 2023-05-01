import React, { useState } from 'react'
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do your Homework', id: 2 },
        { text: 'Feed the Dog', id: 3 }
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: Math.random() }
        ]);
    };

    useState(() => {
        console.log('use effect', todos);
    });

    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>

            <AddNewTodo addTodo={addTodo} />
        </div>
    );
}

export default TodoList;
