import Todo from "./model/Todo";
import dbConnect from "./utils/dbConnect";
import { redirect } from "next/navigation";

export default function Home() {
  async function createTodo(data) {
    "use server";
    let title = data.get("title")?.valueOf();
    let todo = data.get("todo")?.valueOf();

    try {
      dbConnect();
      let newTodo = new Todo({ title, todo });
      await newTodo.save();
      console.log(newTodo);
    } catch (error) {
      console.log(error);
    }

    redirect("/show");
  }

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-b">Create Todo</h1>
      <form action={createTodo}>
        <div className="">
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-[100%] bg-slate-200 h-10 p-3"
          />
        </div>
        <div className="">
          <label htmlFor="todo" className="text-lg">
            Todo
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            className="w-[100%] bg-slate-200 h-10 p-3"
          />
        </div>
        <button
          type="submit"
          className="p-3 bg-yellow-400 hover:bg-orange-500 hover:text-white my-3"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
