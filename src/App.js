import logo from './images/sticky-logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Step1 from './components/Step1';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
     
        <Navigationbar/>
        <Body/>
    </div>
  );
}

export default App;
