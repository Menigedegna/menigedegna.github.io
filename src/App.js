import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './navBar';
import HomePage from './pages/home';
import AboutMePage from './pages/aboutMe';
import ExperiencePage from './pages/experience';
import WorkPage from './pages/work';
import ContactPage from './pages/getInTouch';
import NotFoundPage from './pages/notFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar page='home'/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutMePage />}></Route>
            <Route path="/experience" element={<ExperiencePage />}></Route>
            <Route path="/work" element={<WorkPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
