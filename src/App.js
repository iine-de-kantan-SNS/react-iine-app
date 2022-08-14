import './App.css';
import Title from './components/Title';
import Main from './components/Main';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Signage from './components/Signage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Title />} />
          <Route path='/main' element={<Main />} />
          <Route path='/signage' element={<Signage />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
