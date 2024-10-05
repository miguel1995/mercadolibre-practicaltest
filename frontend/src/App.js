import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowserResultPage from "./pages/BrowserResultPage";
import DetailPage from "./pages/DetailPage";
import MainTemplate from "./components/templates/MainTemplates";



function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <MainTemplate>
                  <HomePage/>
              </MainTemplate>}/>
          <Route path="/items" element={
              <MainTemplate>
                <BrowserResultPage/>
              </MainTemplate>}/>
          <Route path="/items/:id" element={
              <MainTemplate>
                <DetailPage/>
              </MainTemplate>}/>
        </Routes>
      </BrowserRouter>
  );

}

export default App;
