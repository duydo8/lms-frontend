import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import NavBar from './components/trang-chu/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LmsRoute from './components/routes/LmsRoute';

function App() {
  return (
    <main>
      <BrowserRouter>
        <LmsRoute />
      </BrowserRouter>
    </main>
  );
}

export default App;
