import logo from "@img/logo.png";
import SignInButton from "./Auth/SignInButton";
import { Link } from "react-router-dom";
export default function Navbar() {
  const isAuthenticated = false;
  const isAdmin = true;

  return (
    <div className="navbar bg-primary shadow-md">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          <img src={logo} alt="logo" className="h-full" />
        </Link>
      </div>
      {isAdmin && location.pathname !== "/admin" && (
        <Link className="btn btn-ghost text-xl text-white" to={"admin"}>
          Admin Dashboard
        </Link>
      )}
      {isAuthenticated ? (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a className="justify-between">Users</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <SignInButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
