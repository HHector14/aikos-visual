"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Linknb from "./Linknb";

const contactSubmenu = [
  { title: "Cuentanos tu idea", href: "/" },
  { title: "Quienes somos", href: "/" },
  { title: "Preguntas frecuentes", href: "/" },
];

const universeSubmenu = [
  { title: "Spaces", href: "/" },
  { title: "Sports", href: "/" },
  { title: "Studio", href: "/" },
  { title: "Events", href: "/" },
  { title: "Brands", href: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isUniverseOpen, setIsUniverseOpen] = useState(false);


  const closeAll = () => {
    setIsOpen(false);
    setIsContactOpen(false);
    setIsUniverseOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center h-full py-2">
            <Link href="/" className="relative h-full w-auto flex items-center">
              <Image
                src={"/oikos.jpeg"}
                alt="Logotipo"
                width={150}
                height={60}
                className="h-full w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center space-x-6">
            <Linknb href="/" title="Spaces" />
            <Linknb href="/" title="Sports" />
            <Linknb href="/" title="Studio" />
            <Linknb href="/" title="Events" />
            <Linknb href="/" title="Brands" />
            {/* Submenú Contáctanos (Desktop) */}
            <div
              className="relative group"
              onMouseEnter={() => setIsContactOpen(true)}
              onMouseLeave={() => setIsContactOpen(false)}
            >
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-2 text-base font-medium focus:outline-none"
              >
                Contáctanos
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isContactOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown flotante */}
              {isContactOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-gray-950/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2 flex flex-col z-50">
                  {contactSubmenu.map((item) => (
                    <Linknb
                      key={item.title}
                      href={item.href}
                      title={item.title}
                      className="px-4 py-2 hover:bg-white/10 text-sm"
                    />
                  ))}
                </div>
              )}
            </div>
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

      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-gray-950/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-96 py-4" : "opacity-0 max-h-0 overflow-hidden py-0"}`}
      >
        <div className="flex flex-col px-6 space-y-3">
          {/* Acordeón Universos (Mobile) */}
          <div className="border-t border-white/10 pt-2">
            <button
              onClick={() => setIsUniverseOpen(!isUniverseOpen)}
              className="w-full flex items-center justify-between text-white py-2 text-base font-medium focus:outline-none"
            >
              <span>Universos</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isUniverseOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Opciones desplegadas en móvil */}
            <div
              className={`flex flex-col pl-4 space-y-2 overflow-hidden transition-all duration-300 ${isUniverseOpen ? "max-h-40 py-2" : "max-h-0"}`}
            >
              {universeSubmenu.map((item) => (
                <Linknb
                  key={item.title}
                  href={item.href}
                  title={item.title}
                  setIsOpen={closeAll}
                  className="text-sm text-gray-300 hover:text-white"
                />
              ))}
            </div>
          </div>
          {/* Acordeón Contáctanos (Mobile) */}
          <div className="border-t border-white/10 pt-2">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="w-full flex items-center justify-between text-white py-2 text-base font-medium focus:outline-none"
            >
              <span>Contáctanos</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isContactOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Opciones desplegadas en móvil */}
            <div
              className={`flex flex-col pl-4 space-y-2 overflow-hidden transition-all duration-300 ${isContactOpen ? "max-h-40 py-2" : "max-h-0"}`}
            >
              {contactSubmenu.map((item) => (
                <Linknb
                  key={item.title}
                  href={item.href}
                  title={item.title}
                  setIsOpen={closeAll}
                  className="text-sm text-gray-300 hover:text-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
