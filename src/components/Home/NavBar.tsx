import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="nav__container">
      <div className="nav__logo">
        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" width="60"/>
       <input type="text" placeholder="Search here" className="base_input"/>
      </div>
      <div className="nav__searchbar">
      </div>
      <div className="nav__links">
        <Link href="/workers_required">Workers required</Link>
        <Link href="/workers_available">Workers available</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  )
}

export default NavBar