
import './style/scss/main.scss'
import Board from './components/Board';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/game" element={<Board/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
