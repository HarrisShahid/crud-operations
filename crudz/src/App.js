import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Editing from './Components/Editing';


function App() {
  return (
    <>
    <div className="main-class">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/edit' element={<Editing/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      </>
  );
}

export default App;
