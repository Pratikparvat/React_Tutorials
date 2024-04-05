import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Pratik"/>
      <Greet name="Ashish"/>
      <Greet name="XYZ"/>

      <Welcome name="dynamic"/>
      <Hello/>
    </div>
  );
}

export default App;
