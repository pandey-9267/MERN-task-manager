import { useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {

  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    // validation
    if (!task.title.trim() || !task.description.trim()) {

      alert("Fields cannot be empty");

      return;

    }

    await API.post("/", task);

    setTask({
      title: "",
      description: ""
    });

    fetchTasks();
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) =>
          setTask({
            ...task,
            title: e.target.value
          })
        }
      />

      <textarea
        placeholder="Description (max 200 characters)"
        value={task.description}
        maxLength={200}
        rows="3"
        onChange={(e) =>
          setTask({
            ...task,
            description: e.target.value
          })
        }
      />

      <small className="char-count">

        {task.description.length}/200 characters

      </small>

      <button>

        Add Task

      </button>

    </form>

  );
}

export default TaskForm;