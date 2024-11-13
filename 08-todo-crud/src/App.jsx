import React, { useState } from 'react';

export default function App() {

  // if 0, means no task is being edited right now
  const [idBeingEdited, setIdBeingEdited] = useState(0);
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

  // formState for adding a new task
  const [formState, setFormState] = useState({
    title: "",
    urgency: 1,
    done: false
  }
  )

  // editing a new task state
  const [editFormState, setEditFormState] = useState({
    title: "",
    urgency: 1,
    done: false
  });


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

      const clonedAndModifiedObject = { ...formState, "title": e.target.value };
      setFormState(clonedAndModifiedObject);
    }
    if (e.target.name === "urgency") {
      const clonedAndModifiedObject = { ...formState, "urgency": parseInt(e.target.value) };
      setFormState(clonedAndModifiedObject);
    }
    if (e.target.name === "done") {
      const clonedAndModifiedObject = { ...formState, "done": e.target.checked };
      setFormState(clonedAndModifiedObject)
    }
  }

  const updateFormFieldv2 = (e) => {
    if (e.target.type === "text" || e.target.type === "number") {
      if (e.target.type === "number") {
        e.target.value = parseInt(e.target.value);
      }
      const clonedAndModifed = { ...formState, [e.target.name]: e.target.value };
      setFormState(clonedAndModifed);
    } else if (e.target.type === "checkbox") {
      // this only works for singular checkbox (i.e not an array)
      const clonedAndModifed = { ...formState, [e.target.name]: e.target.checked };
      setFormState(clonedAndModifed);
    }
  }

  const updateEditFormState = (e) => {
    if (e.target.type === "text" || e.target.type === "number") {
      if (e.target.type === "number") {
        e.target.value = parseInt(e.target.value);
      }
      const clonedAndModifed = { ...editFormState, [e.target.name]: e.target.value };
      setEditFormState(clonedAndModifed);
    } else if (e.target.type === "checkbox") {
      // this only works for singular checkbox (i.e not an array)
      const clonedAndModifed = { ...editFormState, [e.target.name]: e.target.checked };
      setEditFormState(clonedAndModifed);
    }
  }

  const addNewTask = () => {
    //  const newTask = {
    //   id: Math.floor(Math.random() * 10000 + 9999),
    //   title: formState.title,
    //   urgency: formState.urgency,
    //   done: formState.done
    //  }

    const newTask = { ...formState, id: Math.floor(Math.random() * 10000 + 9999) }

    //  const cloned = [...taskList];
    //  cloned.push(newTask);
    //  setTaskList(cloned);

    setTaskList([...taskList, newTask]);

  }

  const deleteTask = (idToDelete) => {
    // const indexToDelete = taskList.findIndex(t => t.id === idToDelete);
    // const lhs = taskList.slice(0, indexToDelete);
    // const rhs = taskList.slice(indexToDelete + 1)
    // const cloned = [...lhs, ...rhs];
    // setTaskList(cloned);

    const cloned = taskList.filter(task => task.id !== idToDelete);
    setTaskList(cloned);
  }

  const displayTask = (task) => {
    return (
      <>
        {task.title} (Urgency: {task.urgency})
        <input type="checkbox" checked={task.done} />
        <button onClick={() => {
          setIdBeingEdited(task.id);
          setEditFormState({ ...task });
        }}>
          Edit
        </button>

        <button onClick={() => {
          // only when the delete button is clicked, then execute the deleteTask function
          deleteTask(task.id);
        }}>Delete</button>
      </>
    )
  }

  const displayEditTask = (task) => {
    return (
      <>
        <input type="text" placeholder="Enter the new task title" name="title" value={editFormState.title} onChange={updateEditFormState} />
        <input type="number" placeholder="Enter the new urgency" name="urgency" value={editFormState.urgency} onChange={updateEditFormState} />
        <input type="checkbox" checked={editFormState.done} name="done" onChange={updateEditFormState} />
        <button onClick={() => {
          confirmUpdate(task)
        }}>Confirm</button>
      </>
    )
  }

  const confirmUpdate = (task) => {
    // variant of the delete using slice
    // const indexToUpdate = taskList.findIndex(t => t.id === task.id);
    // const lhs = taskList.slice(0, indexToUpdate);
    // const rhs = taskList.slice(indexToUpdate + 1);

    // // construct the modified task
    // const modifiedTask = {
    //   id: task.id,
    //   title: editFormState.title,
    //   urgency: editFormState.urgency,
    //   done: editFormState.done
    // }

    // const cloned = [ ...lhs, modifiedTask, ...rhs];
    // setTaskList(cloned);

    // setIdBeingEdited(0);

    const modifiedTask = { ...editFormState, id: task.id };
    const cloned = taskList.map(t => {
      if (t.id !== task.id) {
        return t;
      } else {
        return modifiedTask;
      }
    })
    setTaskList(cloned);
    setIdBeingEdited(0);


  }

  return (
    <>
      <h1>Todo List</h1>
      <h2>Add a new Task</h2>
      <div>
        <div>
          <label>Title:</label>
          <input type="text" value={formState.title} name="title" onChange={updateFormFieldv2} />
        </div>
        <div>
          <label>Urgency</label>
          <input type="number" value={formState.urgency} name="urgency" onChange={updateFormFieldv2} />
        </div>
        <div>
          <label>Done</label>
          <input type="checkbox" checked={formState.done} name="done" onChange={updateFormFieldv2} />
        </div>
        <button onClick={addNewTask}>Add</button>
      </div>

      <ul>
        {/* {renderTasks()} */}

        {taskList.map(task => (
          <li key={task.id}>
            {task.id !== idBeingEdited ? displayTask(task) : displayEditTask(task)}

          </li>
        ))}
      </ul>
    </>
  )
}