import Link from "next/link";
import { MdDataSaverOff } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="fixed bottom-4 left-4 right-4 bg-black text-white z-10 shadow-sm rounded-full">
            <div className="flex items-center justify-around p-4">
                <Link href="/">
                    <div className="flex flex-col items-center space-y-1 text-white hover:text-gray-400 cursor-pointer">
                        <RiHomeSmile2Line className="w-7 h-7" />
                    </div>
                </Link>
                <Link href="/explore">
                    <div className="flex flex-col items-center space-y-1 text-white hover:text-gray-400 cursor-pointer">
                        <IoCompassOutline className="w-7 h-7" />
                    </div>
                </Link>
                <Link href="/profile">
                    <div className="flex flex-col items-center space-y-1 text-white hover:text-gray-400 cursor-pointer">
                        <FaRegUser className="w-6 h-6" />
                    </div>
                </Link>
                <Link href="/saved">
                    <div className="flex flex-col items-center space-y-1 text-white hover:text-gray-400 cursor-pointer">
                        <MdDataSaverOff className="w-6 h-6" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
