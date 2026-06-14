import API from "../services/api";

function TaskList({ tasks, fetchTasks }) {

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  const updateStatus = async (task) => {
    await API.put(`/${task._id}`, {
      status:
        task.status === "Pending"
          ? "Completed"
          : "Pending"
    });
    fetchTasks();
  };

  // when no task
  if (tasks.length === 0) {
    return (
      <p className="no-task">
        No task yet. Add a task to get started....
      </p>
    );
  }

  return (

    <div>

      {tasks.map((task) => (

        <div className="task" key={task._id}>

          <h3>{task.title}</h3>

        <p className="desc">
  {task.description}
</p>

          <p className="status">
            Status: {task.status}
          </p>

          <div className="actions">

            <button
              onClick={() => updateStatus(task)}
              className="toggle-btn"
            >
              Toggle Status
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              className="delete-btn"
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );
}

export default TaskList;