import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPhotos from './Components/ViewPhotos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/viewphotos' exact element={<ViewPhotos/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
