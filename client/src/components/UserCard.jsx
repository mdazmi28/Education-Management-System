// import React from 'react';
import Image from "next/image";


const UserCard = ({type}) => {
  return (
    <div className="rounded-xl odd:bg-purple-300 even:bg-yellow-300 p-4 flex-1">
        <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024</span>
            <Image src="/more.png" alt="more" width={20} height={20}/>
        </div>
        <h1 className="text-2xl font-semibold my-2">1234</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
