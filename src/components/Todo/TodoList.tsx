import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import classNames from "classnames";
import { LuCheckSquare, LuSquare } from "react-icons/lu";
import {
  BsCheck,
  BsCheckSquare,
  BsFile,
  BsFileCheck,
  BsFileCheckFill,
} from "react-icons/bs";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (todo: Todo) => void;
  startEditing: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  startEditing,
  deleteTodo,
}) => {
  const randomBgColor = () => {
    const colors = [
      "bg-red-100",
      "bg-green-100",
      "bg-blue-100",
      "bg-yellow-100",
      "bg-purple-100",
      "bg-slate-100",
      "bg-orange-100",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={classNames(
            "flex items-center justify-between mb-2 p-4 rounded-md shadow-md",
            randomBgColor()
          )}
        >
          <div
            className="flex items-center gap-1 flex-grow cursor-pointer"
            onClick={() => toggleTodo(todo)}
          >
            {todo.completed ? (
              <BsFileCheckFill color="#30e587" size={25} />
            ) : (
              <BsFile color="gray" size={25} />
            )}

            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.text}
            </span>
          </div>
          <div>
            <button
              onClick={() => startEditing(todo)}
              className="text-blue-500 hover:text-blue-700 mr-2"
            >
              <FaEdit size={20} />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaRegTrashAlt size={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
