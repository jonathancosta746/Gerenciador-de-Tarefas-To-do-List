import React, {useState} from "react";

import Tasks from './components/tasks';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

    setTasks([]);

  return (
    <>
      <div className='container'>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
};

export default App;
