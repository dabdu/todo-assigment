import { useForm, Control } from "react-hook-form";
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { InputField } from "@/components/Form";

interface TodoFormProps {
  onSubmit: (data: any) => void;
  editTodoId: string | null;
  control: Control<any>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  onSubmit,
  editTodoId,
  control,
}) => {
  return (
    <form>
      <div className="flex items-end mb-4">
        <InputField
          label="Title"
          type="text"
          name="text"
          placeholder="Add a new todo"
          control={control}
          rules={{
            required: "Title is required",
          }}
          isTodo
        />
        <div>
          <button
            type="button"
            onClick={onSubmit}
            className={`${
              editTodoId
                ? "bg-green-600 hover:bg-green-700"
                : "bg-slate-800 hover:bg-slate-900"
            } text-white py-[9px] mt-1 px-4 text-xs rounded-r-md flex items-center gap-2`}
          >
            {editTodoId ? <FaRegEdit /> : <FaPlusCircle />}
            {editTodoId ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
