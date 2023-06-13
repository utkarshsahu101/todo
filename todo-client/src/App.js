import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ShowTodoList from "./components/showTodo";
import CreateTodo from "./components/createTodo";

function App() {
  return (
    <div className="app-contents">
      {/* <ShowTodoList /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ShowTodoList />} />
          <Route path="/create-todo" element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
