import './App.css';


const usersArray = [
  {
    id: 1,
    name: "John",
    age: 25,
    profileImage: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    profileImage: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    profileImage: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    profileImage: "https://via.placeholder.com/150/d32776",
  },
];

function App() {
  return (
    <div className="App">
     <table>
     <thead>
          <tr>
            <th><h3>Name</h3></th>
            <th><h3>Age</h3></th>
            <th><h3>Image</h3></th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td><img
                src={value.profileImage}
                /></td>
              </tr>
            );
          })}
        </tbody>
     </table>
    </div>
  );
}

export default App;
