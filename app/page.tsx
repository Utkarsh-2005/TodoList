import { getTodos } from "@/lib/todos";
import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

export default async function Home() {
  const {todos} = await getTodos()
   
  return (
    <section className="py-20">
      <div className="container">
        <h1>Todos</h1>
        <NewTodoForm/>
        <h2>Previous todos</h2>
        <ul>
          {todos?.map(todo => (
            <TodoItem key={todo.id} todo={todo}/>
          ))}
        </ul>
      </div>
    </section>
  );
}
