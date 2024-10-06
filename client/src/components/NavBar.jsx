import Image from "next/image";
// import Link from "next/link";

const NavBar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* Search Bar */}
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
                <Image src='/search.png' alt="search" width={14} height={14} className=''/>
                <input type='text' placeholder='Search..' className='w-[200px] p-2 bg-transparent outline-none text-red-500'/>
            </div>

            {/* Icons and Users */}
            <div className='flex items-center gap-6 justify-end w-full'>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <Image src='/message.png' alt="message" width={20} height={20}/>
                    {/* <Image src='/search.png' width={20} height={20} /> */}
                </div>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                    {/* <Image src='/message.png' width={20} height={20}/> */}
                    <Image src='/announcement.png' alt="announcement" width={20} height={20} />
                    <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
                 
                </div>
                <div className='flex flex-col cursor-pointer'>
                    <span className='text-xs leading-3 font-medium'>Name</span>
                    <span className='text-[10px] text-gray-700 text-right'>Position</span>
                </div>
                <Image src='/avatar.png' alt="avatar" width={36} height={36} className='rounded-full' />
            </div>
        </div>
    );
};

export default NavBar;