/* eslint-disable react-hooks/exhaustive-deps */
import { FaSearch, FaLaptop } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <FaLaptop style={{ fontSize: "2rem" }} />
            <span className=" text-slate-100 text-2xl">Magic </span>
            <span className=" text-slate-300 text-2xl">Technologies</span>
          </h1>
        </Link>

        <ul className="flex gap-5 text-xl">
          <Link to="/">
            <li className="hidden md:inline text-slate-100 hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden md:inline text-slate-100 hover:underline">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-100 hover:underline"> Sign in</li>
            )}
          </Link>
        </ul>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center h-10"
        >
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none  w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-black" />
          </button>
        </form>
      </div>
    </header>
  );
}
