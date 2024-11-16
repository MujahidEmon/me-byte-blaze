import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const[theme, setTheme] = useState('light');

    useEffect( () => {
        localStorage.setItem('theme',theme)
        const LocalTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',LocalTheme)
    },[theme])

    const handleTheme = e =>{
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
    }

    console.log(theme);

  return (
    <div className="navbar bg-base-100 fixed px-6 z-10 shadow-md">
      <div className="flex-1">
        <Link to={'/'} className="btn text-secondary gap-0 btn-ghost text-xl font-bold">ME-Byte<span className="text-primary"> Blaze</span></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal font-bold px-1">
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold' } to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => 
             isActive ? 'text-primary font-bold' : 'font-bold'
            }  to={'/Blogs'}>Blogs</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'} to={"/BookMarks"}>Bookmarks</NavLink>
          </li>
        </ul>
        <label className="grid cursor-pointer place-items-center">
          <input onChange={handleTheme}
            type="checkbox"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
