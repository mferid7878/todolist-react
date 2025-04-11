import { use, useContext } from "react";
import "./Header.css";
import TodoContext from "../todoContext";
// import {  } from "react";

function Header() {
  const { tasks } = useContext(TodoContext);

  return (
    <>
      <h1>My list:{tasks.length}</h1>
    </>
  );
}
export default Header;
