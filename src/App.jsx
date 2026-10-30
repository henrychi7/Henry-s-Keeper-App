import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import Form from "./component/Form";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  function handleDelete(id) {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id == id);
    });
  }

  return (
    <div className="app-shell">
      <Header />
      <Form onsubmit={addTask} />
      <div className="notes-grid">
        {tasks.map((task) => (
          <Note key={task.title} note={task} onDelete={handleDelete} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
