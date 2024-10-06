// import React from 'react';


import UserCard from "@/components/UserCard";

const AdminPage = () => {
  const userTypes = ["student", "teacher", "parents", "staffs"];
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {/* ADMIN */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          {userTypes.map((type, index) => (
            <UserCard key={index} type={type} />
          ))}
        </div>
        <div>
          hello
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-blue-600">r</div>
    </div>
  );
};

export default AdminPage;
