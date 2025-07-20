import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import GraficaMysql from './paginas/graficamysql';
import Pies from './paginas/graficapastel';
import Ejemplonavbar from './paginas/Navbar';

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Ejemplonavbar/>}/>
        <Route path='MySQL' element={<GraficaMysql/>}/>
        <Route path='Pies' element={<Pies/>}/>
      </Routes>
    </Router>
  )
}

export default App;
