import InputBar from "../../components/Inputbar";
import Header from "../../components/Header";
import "./Main.css";
import TodoContext from "../../components/todoContext";
import { useState } from "react";

function MainPage() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  return (
    <>
      <div className="main_page">
        <TodoContext.Provider
          value={{ tasks, setTasks, taskText, setTaskText }}
        >
          <Header />
          <InputBar />
        </TodoContext.Provider>
      </div>
    </>
  );
}

export default MainPage;
