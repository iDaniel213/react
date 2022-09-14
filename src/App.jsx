import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Toggle} from './components/Toggle';
import {Todo} from './components/Todo'; 
import {Counter} from './components/Counter';

function App() {
    return (
        <div className='container border'>
            <h1>Első React App</h1>
            <Counter />
            <Toggle />
            <Todo />
        </div>
        );
        }

export default App;