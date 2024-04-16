import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet name="Pratik"/>
      <Greet name="Ashish">
        <p>Childern prop</p>
        <button>Action</button>
      </Greet>
      <Greet name="XYZ"/>

      <Welcome name="dynamic"/>
      <Hello/> */}
    </div>
  );
}

export default App;
