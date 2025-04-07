import "./Inputbar.css";
import React, { useEffect, useState } from "react";
function InputBar() {
  return (
    <div className="input_bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const taskList = document.getElementById("taskList");
          const taskText = document.querySelector("input").value.trim();
          if (taskText === "") {
            alert("pleasr enter a task0 ");
            return;
          }
          const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
          tasks.push(taskText);
          localStorage.setItem("tasks", JSON.stringify(tasks));

          const taskItem = document.createElement("div");
          taskItem.className = "task_item";
          taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete_button">Delete</button>
          `;
          taskList.appendChild(taskItem);
          document.querySelector("input").value = "";
          const deleteButton = taskItem.querySelector(".delete_button");
          deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
          deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const updatedTasks = tasks.filter((task) => task !== taskText);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
          });
        }}
        action="submit"
      >
        <input type="text" placeholder="Type your message..." />
        <button type="submit">Send</button>
        <div id="taskList"></div>
      </form>
    </div>
  );
}

export default InputBar;
