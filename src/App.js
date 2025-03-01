
import './App.css';
// import NavBar from './components/trang-chu/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Dashboard from './components/trang-chu/DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainConTent from './components/trang-chu/MainConTent';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<MainConTent />} />
            <Route path="lession-list" element={<LessionList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
