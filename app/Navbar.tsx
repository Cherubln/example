import Link from "next/link";
import { RiMenu2Fill, RiMoonLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Fill size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/flowers"}>Flowers</Link>
            </li>
            <li>
              <Link href={"/plants"}>Plants</Link>
            </li>
          </ul>
        </div>

        <Link className="btn btn-ghost text-xl text-primary" href="/">
          Flora Fables
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/flowers"}>Flowers</Link>
          </li>
          <li>
            <Link href={"/plants"}>Plants</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <label className="swap swap-rotate">
          <input type="checkbox" value="forest" className="theme-controller" />
          <FiSun className="swap-on fill-current w-6 h-6" />
          <RiMoonLine className="swap-off fill-current w-6 h-6" />
        </label>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <PiShoppingCart className="h-5 w-5" />
              <span className="badge badge-sm badge-primary indicator-item ">
                8
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <Link className="btn btn-sm  btn-outline btn-primary" href={"/auth"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
