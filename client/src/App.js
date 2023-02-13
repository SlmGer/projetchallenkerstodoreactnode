import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const titre = "TO-DO LIST";
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/todo');
      setBackendData(result.data);
    };
    fetchData();
  }, []);


  const handleClick = () => {
    alert("add new");
  };

  const handleEdit = (id) => {
    alert("editing" + id);
  };

  const handleDelete = (id) => {
    alert("deleting" + id);
  };

  const todo_id = "1";
  let [todos, setTodos] = useState([
    {
      id: 1,
      nom: "Tâche 1",
      etat: "1",
    },
    {
      id: 2,
      nom: "Tâche 2",
      etat: "2",
    },
    {
      id: 3,
      nom: "Tâche 3",
      etat: "3",
    },
    {
      id: 4,
      nom: "Tâche 4",
      etat: "4",
    },
  ]);
  //let todos = backendData;

  return (
    <div className="App">
      <div className="contenu">
        <h1>{titre}</h1>
        <div className='input'><input type="text" placeholder='Recherche' /><br /></div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th className="">Tâche</th>
                <th className="">Etat</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo) => {
                  return (
                    <tr key={todo.id}>
                      <td >{todo.nom}</td>
                      {(() => {
                        switch (todo.etat) {
                          case "1":
                            return <td> <p className="status afaire">A faire</p> </td>;
                          case "2":
                            return <td> <p className="status encours">En cours</p> </td>;

                          case "3":
                            return <td> <p className="status fait">Fait</p> </td>;

                          case "4":
                            return <td> <p className="status enretard">En retard</p> </td>;
                          default:
                            return <td> <p className="status afaire">A faire</p> </td>;
                        }
                      })()}

                      <td className="black"><a onClick={() => handleEdit(todo_id)}><i class="fa fa-pen" aria-hidden="true"></i></a>
                        <a onClick={() => handleDelete(todo_id)}><i class="fa fa-times" aria-hidden="true"></i></a></td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot className='black'>
              <a onClick={handleClick}><i class="fa fa-plus" aria-hidden="true"></i>Ajouter une tâche</a>
            </tfoot>
          </table>
        </div>
      </div>
    </div >
  );
}

export default App;