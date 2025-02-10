import { getTasks } from "@/app/lib/fetchData";
import React from "react";

export default async function TaskPage({ params }) {
  const unitWithTasks = await getTasks(params.id);
  if (!unitWithTasks.tasks) {
    return (
      <div className="alert alert-danger">
        <p>Denna enhet har inga tasks</p>
      </div>
    );
  }
  return (
    <div className="container row">
      <ul className="list-group">
        <li className="list-group-item active">Att göra</li>
        {unitWithTasks &&
          unitWithTasks.tasks.map((task) => (
            <div className="p-3">
              <h5>{task.title}</h5>
              <li className="list-group-item mb-3">
                <p>{task.description}</p>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
