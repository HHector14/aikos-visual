import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/fondo.jpg"
          alt="Fondo de Oikos visual"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-slate-950/60 bg-linear-to-r from-slate-950/80 via-slate-900/50 to-transparent" />

      <div className="max-w-7xl mx-auto w-full px-8 pb-16 flex flex-col justify-center grow z-10">
        <p className="text-xs tracking-widest text-gray-300 uppercase mb-4 flex items-center gap-2">
          <span className="w-6 h-px bg-gray-400"></span> UNA MIRADA. INFINITAS
          POSIBILIDADES.
        </p>

        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-none mb-6">
          Lo que ves. <br />
          <span className="font-normal text-blue-200">Lo que sientes.</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-lg mb-8 font-light">
          Espacios, personas y marcas. <br />
          Historias que merecen una mirada diferente.
        </p>

        <a
          href="#explorar"
          className="inline-flex items-center text-sm text-white border-b border-white pb-1 w-max hover:opacity-80 transition-opacity"
        >
          Explora nuestra mirada &gt;
        </a>
      </div>

      {/* FOOTER INFERIOR DEL HERO */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-8 flex justify-between text-xs text-gray-400 z-10">
        <span>AGUASCALIENTES, MX · DISPONIBLES PARA VIAJAR</span>
        <span>FOTOGRAFÍA / VIDEO / DRON / FPV</span>
        <span>DESLIZA PARA EXPLORAR +</span>
      </div>
    </section>
  );
}
