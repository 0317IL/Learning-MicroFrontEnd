import React, {useState} from 'react';
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid';
import { emitEvent } from '@BMl/utils';

export default function Root({name}){
  const [task, setTask] = useState ('');

  const handleChange = event => {
    setTask(event.target.value)
  }

  const handleSubmit = event =>{
    event.preventDefault()
    emitEvent('@BMl/todolist/todo/add-task', {
        id: uuid(),
        describe: task,
    })
    setTask('')
  }

  return(
    <>
      <h1>Application: {name}</h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>

      <Parcel 
        config={() => System.import('@BMl/parcel')}
      />
    </>
  );
}