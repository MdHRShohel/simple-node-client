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

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);
  }

  return (
    <div className="App">

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder="Enter your name" />
        <br />
        <input type="email" name='email' placeholder="Enter your email" />
        <br />
        <button type="submit">Add User</button>
      </form>


      <h2>Users: {users.length}</h2>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
        }
      </div>
    </div>
  );
}

export default App;
