import Link from "next/link";
import Image from "next/image";
import { Span } from "next/dist/trace";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" className='flex items-center justify-center lg:justify-start gap-2'>
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School App</span>
        </Link>
        <Menu/>
      </div>

      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll flex flex-col">
        <NavBar/>
        {children}
      </div>
    </div>
  );
}
