import React, {useState, useEffect} from 'react';
import { listenEvent } from '@BMl/utils';

export default function Root({name}){
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    listenEvent('@BMl/todolist/todo/add-task', event => {
      setTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ])
    })
  }, [])

  return(
    <>
      <h1>{name}</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
