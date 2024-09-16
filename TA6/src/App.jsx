import { useState } from 'react';
import './App.css';

function App() {
  // Estado para almacenar la lista de tareas y la tarea actual
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    setCurrentTask(event.target.value);
  };

  // Función para manejar la adición de una nueva tarea
  const handleAddTask = () => {
    if (currentTask.trim()) {
      setTasks([...tasks, currentTask]);
      setCurrentTask(''); // Limpiar el input después de agregar la tarea
    }
  };

  // Función para manejar el envío del formulario (evitar el recargado de la página)
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask();
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={handleInputChange}
          placeholder="Agregar nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
