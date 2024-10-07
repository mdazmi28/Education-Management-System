// import React from 'react';


import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  const userTypes = ["student", "teacher", "parents", "staffs"];
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* ADMIN */}
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          {userTypes.map((type, index) => (
            <UserCard key={index} type={type} />
          ))}
        </div>
        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>

          </div>
          {/* Attendance Chart Chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom Chart */}
        <div>

        </div>
        <div>
          hello
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 bg-blue-600">r</div>
    </div>
  );
};

export default AdminPage;
