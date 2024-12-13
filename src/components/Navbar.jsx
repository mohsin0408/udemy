import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { data } from "../../src/data/data";

const Navbar = () => {
  const [showLanguage, setShowLanguage] = useState(false);

  console.log(data);

  return (
    <div className=" container flex gap-4 items-center px-6 border border-b-orange-300 ">
      <div>{data.header.logo}</div>

      <div className="cursor-pointer">
        <button>
          <span>{data.header.links[0].name}</span>
        </button>
      </div>

      <div className="border-black border-2 rounded-full p-2 flex gap-2 w-[36%] ">
        {data.header.input}
        <input
          placeholder="Search for anything"
          type="text"
          className="border-0 outline-none "
        />
      </div>

      <div className=" flex items-center gap-5 ">
        {data.header.links.slice(1, -1).map((link, index) => (
          <a href={link.url} key={index}>
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      <div>
        <IoCartOutline />
      </div>

      <div>
        {data.header.userOptions.map((option, index) => (
          <button key={index} className="ml-4 border-2 p-2 ">
            <a href={option.url}>{option.name}</a>
          </button>
        ))}
      </div>

      <div>
        {data.header.languageSelector.icon}

        <select className=" hidden  ">
          {data.header.languageSelector.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
