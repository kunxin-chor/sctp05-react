import React, { useState } from 'react';

export default function App() {

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Clean the room",
      done: false,
      urgency: 5
    },
    {
      id: 2,
      title: "Buy gorcery",
      done: false,
      urgency: 3
    },
    {
      id: 3,
      title: "Walk the dog",
      done: false,
      urgency: 2
    }
  ]);

  const [formState, setFormState] = useState({
    title: "",
    urgency: 1,
    done: false
    }
  )

  // const renderTasks = () => {
  //   const jsx =[];
  //   for (let t of task) {
  //     jsx.push(<li key={t.id}>
  //       {t.title} (Urgency: {t.urgency}) <input type="checkbox" checked={t.done}/>
  //     </li>)
  //   }
  //   return jsx;
  // }

  const updateFormField = (e) => {
    if (e.target.name === "title") {
      // // 1. clone the original object
      // const clonedObject = {...formState};
      // // 2. modify the clone
      // clonedObject.title = e.target.value;
      // // 3. replace the clone as the new value in the state
      // setFormState(clonedObject);

      const clonedAndModifiedObject = {...formState, "title": e.target.value};
      setFormState(clonedAndModifiedObject);
    }
    if (e.target.name === "urgency") {
      const clonedAndModifiedObject = {...formState, "urgency": parseInt(e.target.value)};
      setFormState(clonedAndModifiedObject);
    }
    if (e.target.name === "done") {
      const clonedAndModifiedObject = {...formState, "done": e.target.checked};
      setFormState(clonedAndModifiedObject)
    }
  }

  const updateFormFieldv2 = (e) => {
    if (e.target.type === "text" || e.target.type === "number") {
      if (e.target.type === "number") {
        e.target.value = parseInt(e.target.value);
      }
      const clonedAndModifed = {...formState, [e.target.name]: e.target.value};
      setFormState(clonedAndModifed);
    } else if (e.target.type === "checkbox") {
      // this only works for singular checkbox (i.e not an array)
      const clonedAndModifed = {...formState, [e.target.name]: e.target.checked};
      setFormState(clonedAndModifed);
    } 
  }

  const addNewTask = ()=> {
    //  const newTask = {
    //   id: Math.floor(Math.random() * 10000 + 9999),
    //   title: formState.title,
    //   urgency: formState.urgency,
    //   done: formState.done
    //  }

    const newTask ={...formState, id: Math.floor(Math.random() * 10000 + 9999)}

    //  const cloned = [...taskList];
    //  cloned.push(newTask);
    //  setTaskList(cloned);

    setTaskList([...taskList, newTask]);

  }

  return (
    <>
      <h1>Todo List</h1>
      <h2>Add a new Task</h2>
      <div>
        <div>
          <label>Title:</label>
          <input type="text" value={formState.title} name="title" onChange={updateFormFieldv2}/>
        </div>
        <div>
          <label>Urgency</label>
          <input type="number" value={formState.urgency} name="urgency" onChange={updateFormFieldv2}/>
        </div>
        <div>
          <label>Done</label>
          <input type="checkbox" checked={formState.done} name="done" onChange={updateFormFieldv2}/>
        </div>
        <button onClick={addNewTask}>Add</button>
      </div>

      <ul>
        {/* {renderTasks()} */}

        {taskList.map(task => (
          <li key={task.id}>
            {task.title} (Urgency: {task.urgency}) <input type="checkbox" checked={task.done} />
          </li>
        ))}
      </ul>
    </>
  )
}