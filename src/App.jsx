// App.js
import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './App.css';

function Layout() {
  return (
    <>
      <h1>Math magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="*" element={<div>If page not found it goes here</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
