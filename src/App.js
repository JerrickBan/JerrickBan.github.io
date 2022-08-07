import logo from './logo.svg';
import './App.css';
import Title from './components/title.jsx';
import Timeline from './components/Timeline.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
      <div>
        <Title />
        <Experience />
        <Projects />
      </div>
    
  );
}

export default App;
