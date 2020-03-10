import React, { useState, useEffect } from "react";
import data from './data.json';
import axios from 'axios';

export const TodoListFunctionComponent = () => {
    const [todos, setTodos] = useState();
    const [nextTodoId, setNextTodoId] = useState(0);
    const [newTodoLabel, setNewTodoLabel] = useState("");

    useEffect(() => {
        axios
          .get(
            "https://raw.githubusercontent.com/daolv/reacthooks/master/src/data.json"
          )
          .then(({ data }) => {
            setTodos(data);
            setNextTodoId(data.length);
          });
      }, []);
    

    const markTodoAsDone = (id, done) =>
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, done } : todo)));

    const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id));

    const addNewTodo = () => {
        setTodos([
            ...todos,
            {
                id: nextTodoId,
                label: newTodoLabel,
                done: false
            }
        ]);
        setNextTodoId(nextTodoId + 1);
        setNewTodoLabel("");
    };

    return todos ? (
        <div className="todo-list">
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={({ target }) => markTodoAsDone(todo.id, target.checked)}
                            label={todo.label}
                        />
                        <span className={todo.done ? "done" : ""}>{todo.label}</span>
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
            <div className="new-todo">
                <input
                    type="text"
                    value={newTodoLabel}
                    onChange={({ target }) => setNewTodoLabel(target.value)}
                />
                <button onClick={addNewTodo}>Add</button>
            </div>
        </div>
    ) : (
            <div>Loading...</div>
        );
};

export default TodoListFunctionComponent;