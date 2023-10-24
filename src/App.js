// TODO: remove all console.log()

import './App.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './navBar';
import HomePage from './pages/home';
import ExperiencePage from './pages/experience';
import WorkPage from './pages/work';
import ContactPage from './pages/getInTouch';
import NotFoundPage from './pages/notFoundPage';
import { Footer } from './footer';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <div id="page-body">
          <NavBar page='home'/>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/projects" element={<ExperiencePage />}></Route>
            <Route path="/skills" element={<WorkPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path='/404' element={<NotFoundPage/>} />
            <Route path='*' element={<Navigate replace to='/404'/>} />
            {/* <Route path="*" element={<NotFoundPage />}></Route> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
