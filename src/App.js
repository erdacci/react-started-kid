import { createElement } from "react";
import "./style.css";

function App() {
  // const todos = ["todo1", "todo2", "todo3"];
  const h1 = createElement("h1", null, "Arda");
  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    h1
  );

  // return (
  //   <main id="main" className="test">
  //     <h1>Arda</h1>
  //     <ul>
  //       {todos.map((todo) => (
  //         <li>{todo}</li>
  //       ))}
  //     </ul>
  //   </main>
  // );
}

export default App;
