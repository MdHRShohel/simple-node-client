import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])

  return (
    <div className="App">
      <h1>Users: {users.length}</h1>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
        }
      </div>
    </div>
  );
}

export default App;
