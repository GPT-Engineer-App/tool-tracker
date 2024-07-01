import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Inventory Management System</h1>
      <p className="text-center">Manage your tools and shop inventory efficiently.</p>
      <div className="space-x-4">
        <Link to="/tools-on-trucks">
          <Button variant="outline">Manage Tools on Trucks</Button>
        </Link>
        <Link to="/shop-inventory">
          <Button variant="outline">Manage Shop Inventory</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;