import Link from "next/link";
import Image from "next/image";
import { Span } from "next/dist/trace";

export default function RootLayout({ children }) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[20%] bg-red-700 md:w-[10%] lg:w-[20%] xl:w-[20%]">
        <Link href="/" className='flex items-center justify-center gap-2'>
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block">School App</span>
        </Link>
      </div>

      {/* Right */}
      <div className="w-[80%] bg-green-700 md:w-[90%] lg:w-[80%] xl:w-[80%]">
        r
      </div>
    </div>
  );
}
