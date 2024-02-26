import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import PriceOptions from "../PriceOptions/PriceOptions";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    // Home route
    { id: 1, name: "Home", path: "/" },

    // About route
    { id: 2, name: "About", path: "/about" },

    // Contact route
    { id: 3, name: "Contact", path: "/contact" },

    // Products route
    { id: 4, name: "Products", path: "/products" },

    // Services route
    { id: 5, name: "Services", path: "/services" },
  ];

  return (
    <>
      <div className="md:hidden text-2xl p-4" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`md:flex md:justify-center md:items-center duration-1000 absolute md:static 
          ${open ? "top-28" : "-top-60"}
          bg-purple-600 space-y-4 px-6
        `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>

      <PriceOptions></PriceOptions>
    </>
  );
};

export default Navbar;
