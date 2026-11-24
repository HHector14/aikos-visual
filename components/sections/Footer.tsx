import Image from "next/image";
import SocialIcon from "../ui/SocialIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950/50 border-t border-blue-900/40 text-blue-100/70 text-xs">
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-4">
            <Link href="/" >
                <Image 
                    src="/oikos.jpeg" 
                    width={48} 
                    height={48} 
                    alt="AIKOS Logo" 
                    className="rounded-md object-cover" 
                />
            </Link>
          <div className="flex gap-3 text-blue-200/80">
            <SocialIcon name="whatsapp" />
            <SocialIcon name="instagram" />
            <SocialIcon name="email" />
          </div>
        </div>

        {/* Bloque Central: Servicios & Tagline */}
        <p className="tracking-wider uppercase text-center font-medium text-blue-100/60">
          Fotografía / Video / Dron / FPV <span className="mx-1 text-blue-400">•</span> Disponibles para viajar
        </p>

        {/* Bloque Derecho: Copyright & Ubicación */}
        <p className="tracking-wider font-light text-blue-100/50 text-center md:text-right">
          © 2026 AIKOS · AGUASCALIENTES, MX
        </p>
        
      </div>
    </footer>
  );
}