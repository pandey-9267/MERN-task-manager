import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import API from "./services/api";

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {

    const res = await API.get("/");

    setTasks(res.data);

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  // reset filter if no tasks available
  useEffect(() => {

    if (tasks.length === 0) {

      setFilter("All");

    }

  }, [tasks]);

  // filter logic
  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) => task.status === filter
        );

  return (

    <div className="container">

      <h1>Task Manager</h1>

      <TaskForm fetchTasks={fetchTasks} />

      {/* filter buttons */}

      <div className="filter">

        <button
          className={filter === "All" ? "active-filter" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={filter === "Pending" ? "active-filter" : ""}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>

        <button
          className={filter === "Completed" ? "active-filter" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>

      </div>

      <TaskList
        tasks={filteredTasks}
        fetchTasks={fetchTasks}
      />

    </div>

  );

}

export default App;