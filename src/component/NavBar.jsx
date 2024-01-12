import { useEffect } from "react";
import { useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { NavLinks, Logo } from "../component";
import { useDispatch, useSelector } from "react-redux";
import { ToggleThem } from "../features/user/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(ToggleThem());
  };

  const { numItemsInCart } = useSelector((state) => state.cartState);

  return (
    <nav className="bg-base-200">
      <div className=" align-element navbar">
        <div className="navbar-start">
          <div className=" w-32">
            <NavLink className="hidden lg:flex  items-center" to="/">
              <Logo />
            </NavLink>
          </div>
          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className=" h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  ">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <label className="swap swap-rotate ">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleTheme} />

              {/* sun icon */}
              <BsSunFill className="swap-on h-4 w-4" />

              {/* moon icon */}
              <BsMoonFill className="swap-off h-4 w-4" />
            </label>
          </div>

          <NavLink to="/cart" className="btn btn-ghost  btn-circle ml-4 btn-md">
            <div className="indicator">
              <BsCart3 className=" h-6 w-6" />
              <span className=" badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
