
import './App.css';

function App() {

const somefunction = () =>{
  console.log("hey there")
}

  return (
    <div className="App">
     <div>
       <p>Amit payla</p>
       <button onClick={somefunction}>Click it</button>
     </div>
    </div>
  );
}

export default App;
