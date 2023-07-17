import logo from './logo.svg';
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUS from './Components/AboutUs/AboutUS';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Events from './Components/Events/Events';
import Team from './Components/Team/Team';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
          <Route exact path="/" element={<LandingPage  />} />
          <Route exact path="/about" element={<AboutUS  />} />
          <Route exact path="/events" element={<Events  />} />
          <Route exact path="/team" element={<Team  />} />
           
          
          
    </Routes>
    <Footer />

    </Router>
    
    
    </>
  );
}


export default App;
