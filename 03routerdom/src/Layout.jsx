import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>
        <Link to="/user">User</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}