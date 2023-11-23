import Todo from "../model/Todo";
import dbConnect from "../utils/dbConnect";
import { redirect } from "next/navigation";

export default async function ShowPage() {
  dbConnect();
  const todos = await Todo.find({});
  console.log(todos);
  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">
        <div>
          <ul className="flex font-bold">
            <li className="flex-1">Title</li>
            <li className="flex-1">Todo</li>
            <li className="flex-1">Completed</li>
            <li className="flex-1">Options</li>
          </ul>
          <hr />
          {todos.map((todo) => (
            <ul className="flex" key={todo._id}>
              <li className="flex-1">{todo.title}</li>
              <li className="flex-1">{todo.todo}</li>
              <li className="flex-1">{todo.completed.toString()}</li>
              <li className="flex-1">
                <div className="flex">
                  <button className="p-2 m-2 bg-red-500 rounded-md text-white hover:cursor-pointer">
                    Delete
                  </button>
                  <button className="p-2 m-2 bg-green-500 rounded-md text-white hover:cursor-pointer">
                    Edit
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </h1>
    </main>
  );
}
