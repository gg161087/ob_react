import logo from './logo.svg';
import './App.css';

import Greeting from './components/pure/greetingClass.jsx';
import GreetingFuncion from './components/pure/greetingFuncion.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Greeting name={true} lastname={"Gonzalez"}></Greeting>
                <GreetingFuncion name={"Gonzalo"} lastname={"Gonzalez"} age={35}></GreetingFuncion>
            </header>
        </div>
    );
}

export default App;