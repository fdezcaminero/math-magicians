import { Outlet, Link } from 'react-router-dom';

const Layout = (
  <header>
    <nav>
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
    </nav>

    <Outlet />
  </header>
);

export default Layout;
