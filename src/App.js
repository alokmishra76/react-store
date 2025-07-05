import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/body/Body';
import MainContainer from './components/container/MainContainer';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Body />}>
        <Route index element={<MainContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
