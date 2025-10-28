import React from "react";
import DistrictGlobe from "./DistrictGlobe";
import AuthorityDetails from "./AuthorityDetails";

const UserDetails = () => {
  return (
    <div className=" rounded-2xl shadow-lg w-full max-w-8xl mx-auto p-4 sm:p-6 md:p-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left: Globe Section */}
      <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-4">
        <DistrictGlobe />
      </div>

      {/* Right: Professor Details */}
      <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
        <AuthorityDetails />
      </div>
    </div>
  );
};

export default UserDetails;
