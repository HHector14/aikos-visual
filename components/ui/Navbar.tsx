'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Linknb from "./Linknb";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    <div className="flex items-center h-full py-2">
                        <Link href="/" className="relative h-full w-auto flex items-center">
                            <Image 
                                src={'/oikos.jpeg'} 
                                alt="Logotipo"
                                width={150} 
                                height={60} 
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center space-x-6">
                        <Linknb href="/" title="Spaces"/>
                        <Linknb href="/" title="Sports"/>
                        <Linknb href="/" title="Studio"/>
                        <Linknb href="/" title="Events"/>
                        <Linknb href="/" title="Brands"/>
                        <Linknb href="/" title="Contactanos"/>
                    </div>

                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-white focus:outline-none p-2"
                            aria-label="Abrir menú"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>

                </div>
            </div>

            <div className={`md:hidden absolute top-20 left-0 w-full bg-gray-950/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-96 py-4" : "opacity-0 max-h-0 overflow-hidden py-0"}`}>
                <div className="flex flex-col px-6 space-y-3">
                    <Linknb href="/" title="Spaces" setIsOpen={setIsOpen} className="py-2 block text-base font-medium"/>
                    <Linknb href="/" title="Sports" setIsOpen={setIsOpen} className="py-2 block text-base font-medium"/>
                    <Linknb href="/" title="Studio" setIsOpen={setIsOpen} className="py-2 block text-base font-medium"/>
                </div>
            </div>
        </header>
    );
}