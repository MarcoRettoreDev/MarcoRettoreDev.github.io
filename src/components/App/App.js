import './App.css';
import { Header } from '../Header/Header.jsx';
import { Projects } from '../Projects/Projects.jsx';
import { About } from '../About/About';
import { Education } from '../Education/Education';

function App() {
  return (
    <>
      <Header/>
      <Projects/>
      <About/>
      <Education/>
    </>
  );
}

export default App;
