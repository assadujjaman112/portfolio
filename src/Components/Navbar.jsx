import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/" className="text-white">
          Home
        </Link>
      </li>

      <li>
        <a href="/#projects" className="text-white">
          Projects
        </a>
      </li>
      <li>
        <a href="/#education" className="text-white">
          Education
        </a>
      </li>
      <li>
        <a href="/#contact">Contact Me</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent md:w-4/5 mx-auto text-white rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-3xl font-bold">
          Assadujjaman
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-info">Hire me</a>
      </div>
    </div>
  );
};

export default Navbar;
