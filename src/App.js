import { useState } from "react";
import Header from "./components/Header";
import From from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      time: "Feb 15 at 2:30 PM",
      isRemindered: true,
    },
    {
      id: 2,
      text: "Basketball practice",
      time: "Feb 16 at 3:30 PM",
      isRemindered: false,
    },
    {
      id: 3,
      text: "Go to supermarket",
      time: "Feb 14 at 2:30 PM",
      isRemindered: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  return (
    <div className="App">
      <Header />
      <From />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <h3 style={{ textAlign: "center", paddingTop: "5rem" }}>
          No tasks to show
        </h3>
      )}
    </div>
  );
}

export default App;
