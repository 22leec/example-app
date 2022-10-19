import { useState, useEffect } from "react";
import './App.css';
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "tasks");

  const createTask = async () => {
    await addDoc(usersCollectionRef, { task: newTask, date: newDate });
  }; 

  const deleteUser = async (id) => {
    const userDoc = doc(db, "tasks", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <input 
        placeholder="Task" 
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <input 
        type="date" 
        placeholder="Date" 
        onChange={(e) => {
          setNewDate(e.target.value);
        }}
      />

      <button onClick={createTask}> Create Task </button>
      {users.map((user) => {
        return (
          <div> 
            {" "}
            <h1>Task: {user.task}</h1>
            <h1>Date: {user.date}</h1>
            <button onClick={() => {deleteUser(user.id)}}> Delete Task </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
