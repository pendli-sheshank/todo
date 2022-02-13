import AddTodo from "./AddTodo";
import "./App.css";
import LIstTodos from "./LIstTodos";

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTodo />
      {/* <LIstTodos /> */}
    </div>
  );
}

export default App;
