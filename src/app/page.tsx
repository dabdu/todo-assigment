// app/home/page.tsx
"use client";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase.config";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  addDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { TodoForm, TodoList } from "@/components/Todo";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function Home() {
  const { user, loading, signOut } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const { control, handleSubmit, reset } = useForm(); // Initialize useForm
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const q = query(
        collection(firestore, "todos"),
        where("userId", "==", user.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const items: Todo[] = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() } as Todo);
        });
        setTodos(items);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const onSubmit = async (data: any) => {
    if (editTodoId) {
      // If editing a todo
      await updateDoc(doc(firestore, "todos", editTodoId), {
        text: data.text,
      });
      setEditTodoId(null);
      reset({ text: "" });
    } else {
      // Adding a new todo
      if (data.text.trim() === "") return;
      try {
        await addDoc(collection(firestore, "todos"), {
          text: data.text,
          completed: false,
          userId: user?.uid,
        });
        toast.success("Todo Added Successfully");
        reset({ text: "" });
      } catch (error: any) {
        console.log(error?.message);
      }
    }
  };

  const toggleTodo = async (todo: Todo) => {
    await updateDoc(doc(firestore, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(firestore, "todos", id));
  };

  const startEditing = (todo: Todo) => {
    setEditTodoId(todo.id);
    reset({ text: todo.text });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Hey, {user?.displayName} 👋
        </h1>
        <h4 className="text-lg font-medium text-slate-800 mb-4">
          What's your plan for Today!
        </h4>

        {/* Todo Form */}
        <TodoForm
          onSubmit={handleSubmit(onSubmit)}
          editTodoId={editTodoId}
          control={control}
        />

        {/* Todo List */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          startEditing={startEditing}
          deleteTodo={deleteTodo}
        />

        <button
          onClick={signOut}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
