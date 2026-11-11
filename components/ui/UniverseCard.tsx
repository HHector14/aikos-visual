import Image from "next/image";

interface UniverseCardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    number?: string;
    colorScheme?: "verde" | "azul" | "rojo" | "oscuro" | "amarillo"; // Las opciones permitidas
}

// Diccionario que traduce la palabra al string completo de Tailwind
const colorMap: Record<string, string> = {
    verde: "bg-emerald-950/80",
    azul: "bg-blue-950/80",
    rojo: "bg-red-950/80",
    amarillo: "bg-amber-400/80",
    oscuro: "bg-black/60",
};

export default function UniverseCard({title, subtitle, imageSrc, number, colorScheme}:UniverseCardProps){
    return(
        <div className="relative h-96 w-60 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            {/* Imagen de fondo*/}
            <Image
             src={imageSrc}
             alt="universe_card"
             fill
             className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className={`absolute inset-0 ${colorMap[colorScheme || "oscuro"]} mix-blend-multiply`} />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                
                {/* Parte superior*/}
                <span className="text-sm font-light tracking-widest opacity-80">{number}</span>

                {/* Parte inferior: Títulos y descripción */}
                <div>
                    <h3 className="text-3xl font-normal mb-2 tracking-wide">{title}</h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mr-10">
                        {subtitle}
                    </p>
                </div>

            </div>
        </div>
    )
}