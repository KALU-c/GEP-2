import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.tsx';
import Register from './pages/Register.tsx';
import About from './pages/About.tsx';
import ProgramsPage from './pages/ProgramsPage.tsx';
import Testimonial from './pages/Testimonial.tsx';
import { Routes, Route } from 'react-router-dom';
import InternalError from './container/Error/InternalError.tsx';

const App = () => (
  <div className="container">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/programs' element={<ProgramsPage />}/>
      <Route path='/testimonial' element={<Testimonial />}/>
      <Route path='/error500' element={<InternalError />}/>
    </Routes>
  </div>
);

export default App;