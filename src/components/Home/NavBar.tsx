"use client";
import Link from "next/link";
import Magnifier from "../svg/Magnifier";

// const [search,useSearch] = useState("");

const NavBar = () => {
  const handleInput: any = (data: any) => {
    console.log("data", data);
    return;
  };
  return (
    <nav className="nav__container">
      <div className="nav__logo">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt=""
          width="100"
        />
        <div className="nav__input">
          <input type="text" placeholder="Search here" className="base_input" />
          <div className="nav__magnifier">
          <Magnifier/>
          </div>
        </div>
      </div>
      <div className="nav__searchbar"></div>
      <div className="nav__links">
        <Link href="/workers_required">Workers required</Link>
        <Link href="/workers_available">Workers available</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
