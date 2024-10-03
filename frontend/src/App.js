import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowserResultPage from "./pages/BrowserResultPage";
import DetailPage from "./pages/DetailPage";



function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/items" element={<BrowserResultPage/>} />
          <Route path="/items/:id" element={<DetailPage/>} />
        </Routes>
      </BrowserRouter>
  );

}

export default App;
