import TodoItems from "./components/TodoItems";
import { dummyData } from "./data/todos";

function App() {
  return (
    <main className="py-10 h-screen space-y-3">
      <h1 className="text-center text-4xl capitalize">your todo</h1>
      <div className="max-w-lg mx-auto bg-slate-100 p-4 rounded-lg">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <TodoItems todo={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
