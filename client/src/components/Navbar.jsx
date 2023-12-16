import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent mt-2 border-white border rounded-full border-3 flex justify-center cursor-pointer">
        <div className="flex-1">
          <div
            className="btn btn-ghost text-5xl text-lime-500 :hover rounded-full :hover btn-wide btn-lg text-left p-4"
            id="logo">
            Lumi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
