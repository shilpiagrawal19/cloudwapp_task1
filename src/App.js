import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Event from './components/events/Event';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Home/>
     <Event/>
     <Footer/>
    </div>
  );
}

export default App;
