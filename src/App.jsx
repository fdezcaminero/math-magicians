// App.js
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './App.css';

function Layout() {
  return (
    <>
      <h1>Math magicians</h1>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <section>
      <Home />
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Home page</div>} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="*" element={<div>If page not found it goes here</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
