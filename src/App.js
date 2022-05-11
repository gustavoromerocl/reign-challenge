import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let Hello = () => {
  return <h1>Hola mundo</h1>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
