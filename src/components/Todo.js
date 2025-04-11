import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Todo = ({ task, deleteTodo, editTodo, toggleCompleted }) => {
    return (
        <div
            className={`flex justify-between items-center bg-[#8e5093] text-white
            py-3 px-4 rounded-md mb-1 cursor-pointer ${
                task.completed ? "opacity-50 line-through" : ""
            }`}
        >
            <p
                className="font-primary"
                onClick={() => toggleCompleted(task.id)}
                title="Click to toggle completed"
            >
                {task.task}
            </p>
            <div className="flex items-center gap-x-4">
                <FaEdit className="text-xl" onClick={() => editTodo(task.id)} />
                <FaTrash className="text-xl" onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};

export default Todo;