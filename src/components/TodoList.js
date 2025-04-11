import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";
uuidv4();

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const createTodo = (todo) => {
        if (!todo.trim()) return; // Prevent empty tasks
        setTodos([...todos, { id: uuidv4(), task: todo, isEditing: false, completed: false }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const toggleCompleted = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="container bg-[#1b2e35] mt-20 p-8 rounded-md">
            <Form createTodo={createTodo} />
            {todos.length === 0 ? (
                <p className="text-center text-gray-400 mt-4">No tasks available. Add a task to get started!</p>
            ) : (
                todos.map((todo) =>
                    todo.isEditing ? (
                        <Edit key={todo.id} task={todo} editTodo={editTask} />
                    ) : (
                        <Todo
                            key={todo.id}
                            task={todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            toggleCompleted={toggleCompleted}
                        />
                    )
                )
            )}
        </div>
    );
};

export default TodoList;
