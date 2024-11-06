"use client";
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './button';
import { ModeToggle } from './themeChange';
const Navbar = () => {

    return (
        <nav className=" bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <div className="max-w-6xl mx-auto px-4 ">
                <div className="flex justify-between ">
                    <div className=" ">
                        <div className="py-4">
                            <span className="font-bold text-2xl text-gray-800 dark:text-white">QRINUX</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex  space-x-8 ">
                        <Link href="/" className="py-4 px-2 text-gray-800 dark:text-white hover:scale-105 transition duration-300">
                            Home
                        </Link>
                        <Link href="/about" className="py-4 px-2 text-gray-800 dark:text-white hover:scale-105 transition duration-300">
                            About
                        </Link>
                        <Link href="/contact" className="py-4 px-2 text-gray-800 dark:text-white hover:scale-105 transition duration-300">
                            Contact
                        </Link>
                        <div className='flex items-center gap-x-2'>
                            <Button>Login</Button>
                            <Button>Sign Up</Button>
                            <ModeToggle />
                        </div>
                    </div>


                    {/* Mobile menu button */}

                    <div className='md:hidden flex items-center '>
                        <div className='mr-2'><ModeToggle /></div>
                        <div className='mt-2'>
                            <Sheet >
                                <SheetTrigger>
                                    <div className="">
                                        <button>
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            ><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                                        </button>
                                    </div>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className='mt-6'>Mobile Nav Item</SheetTitle>
                                        <SheetDescription>
                                            <div className="flex flex-col items-center py-2 justify-center">
                                                <Link href="/"
                                                    className="block px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full">
                                                    Home
                                                </Link>
                                                <Link href="/about"
                                                    className="block px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full">
                                                    About
                                                </Link>
                                                <Link href="/contact"
                                                    className="block px-2 py-2 text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 w-full">
                                                    Contact
                                                </Link>
                                                <div className='flex gap-4 '>
                                                    <Button>Login</Button>
                                                    <Button>Sign Up</Button>
                                                </div>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;