import React, { Component } from "react";
import data from './data.json';

export default class TodoListClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextTodoId: 0,
            newTodoLabel: ""
        };
    }

    componentDidMount() {

        this.setState({ todos: data });
        this.setState({ nextTodoId: data.length });
    }

    markTodoAsDone = (id, done) =>
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? { ...todo, done } : todo
            )
        });

    removeTodo = id =>
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });

    addNewTodo = () =>
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: this.state.nextTodoId,
                    label: this.state.newTodoLabel,
                    done: false
                }
            ],
            nextTodoId: this.state.nextTodoId + 1,
            newTodoLabel: ""
        });

    render() {
        const { todos, newTodoLabel } = this.state;
        return todos ? (
            <div className="todo-list">
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={({ target }) =>
                                    this.markTodoAsDone(todo.id, target.checked)
                                }
                                label={todo.label}
                            />
                            <span className={todo.done ? "done" : ""}>{todo.label}</span>
                            <button onClick={() => this.removeTodo(todo.id)}>X</button>
                        </li>
                    ))}
                </ul>
                <div className="new-todo">
                    <input
                        type="text"
                        value={newTodoLabel}
                        onChange={({ target }) =>
                            this.setState({ newTodoLabel: target.value })
                        }
                    />
                    <button onClick={this.addNewTodo}>Add</button>
                </div>
            </div>
        ) : (
                <div>Loading...</div>
            );
    }
}