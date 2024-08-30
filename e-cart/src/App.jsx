
import Home from './COMPONENTS/Home';
import Card from './COMPONENTS/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './COMPONENTS/Header';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
