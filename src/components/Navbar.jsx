import { useState } from 'react';
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import suraj from "../assets/suraj.svg";
import chand from "../assets/chand.svg";

const Navbar = () => {
  // default light mode
  const [darkMode, setDarkMode] = useState(false);

  function changeMode() {
    let html = document.documentElement;
    html.classList.toggle("dark");

    // React re-renders → mode icon changes
    setDarkMode(prev => !prev);
  }

  return (
    <div className="bg-navbar-bg text-white flex items-center justify-around max-sm:justify-between shadow-md px-3 py-2 w-full">

      <div className="flex items-center">
        <img src={hamburger} alt="hamburger" className="xs:hidden" />
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex items-center gap-6 max-sm:gap-4">

        <li className="cursor-pointer text-base max-sm:text-sm font-semibold text-white max-xs:hidden">Home</li>
        <li className="cursor-pointer text-base max-sm:text-sm font-semibold text-white max-xs:hidden">Transactions</li>

        <button onClick={changeMode} className="flex items-center justify-center w-8 h-8 bg-modebg transition-transform rounded-full active:scale-95 cursor-pointer">
          {darkMode ? <img src={suraj} /> : <img src={chand} />}
        </button>

      </ul>
    </div>
  )
}

export default Navbar
