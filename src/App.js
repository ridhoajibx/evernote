import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
