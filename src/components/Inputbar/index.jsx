import "./Inputbar.css";
import React, { useEffect, useContext } from "react";
import TodoContext from "../../components/todoContext";

function InputBar() {
  const { tasks, setTasks, taskText, setTaskText } = useContext(TodoContext);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    setTasks([...tasks, taskText.trim()]);
    setTaskText("");
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="input_bar">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Type your message..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div id="taskList">
        {tasks.map((task, index) => (
          <div key={index} className="task_item">
            <span>{task}</span>
            <button
              className="delete_button"
              onClick={() => handleDeleteTask(task)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputBar;
