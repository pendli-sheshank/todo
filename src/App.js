import AddTodo from "./AddTodo";
import "./App.css";
import LIstTodos from "./LIstTodos";

function App() {
  return (
    <div className="App mb-5 ">
      <h1 className="card shadow-lg mb-5 pt-3 pb-3 ">Todo List</h1>
      <AddTodo />
    </div>
  );
}

export default App;
