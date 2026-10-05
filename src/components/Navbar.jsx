import { useState } from 'react';

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
        <img src="./src/assets/hamburger.svg" alt="hamburger" className="xs:hidden"/>
        <img src="./src/assets/logo.svg" alt="logo" />
      </div>

      <ul className="flex items-center gap-6 max-sm:gap-4">
        <li className="cursor-pointer text-base max-sm:text-sm font-semibold text-white max-xs:hidden">Home</li>
        <li className="cursor-pointer text-base max-sm:text-sm font-semibold text-white max-xs:hidden">Transactions</li>

        <button onClick={changeMode} className="flex items-center justify-center w-7 h-7 bg-modebg transition-transform rounded-full active:scale-95 cursor-pointer">
          <img
            src={darkMode ? "./src/assets/suraj.svg" : "./src/assets/chand.svg"}
            alt=""
          />
        </button>

      </ul>
    </div>
  )
}

export default Navbar
