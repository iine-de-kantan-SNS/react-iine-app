import './App.css';
import Title from './components/Title';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signage from './components/Signage';
import Communicate from './components/Communicate';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Title />} />
          <Route path='/main' element={<Main />} />
          <Route path='/signage' element={<Signage />} />
          <Route path='/communicate' element={<Communicate/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
