import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import Course from './pages/Course/Course';
import Content from './pages/TEST/Content';
// import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<Course />} />
        <Route path='/content' element={<Content />} />
      </Routes>
  );
}

export default App;
