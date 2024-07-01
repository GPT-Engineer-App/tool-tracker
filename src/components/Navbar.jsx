import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-between">
      <div className="flex space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-white">Home</Button>
        </Link>
        <Link to="/tools-on-trucks">
          <Button variant="ghost" className="text-white">Tools on Trucks</Button>
        </Link>
        <Link to="/shop-inventory">
          <Button variant="ghost" className="text-white">Shop Inventory</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;