import Image from "next/image";
import { Suspense } from "react";
export const instant = false;

function UniverseSkeleton() {
  return (
    <div className="min-h-screen bg-slate-800 text-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header del Universo */}
        <header className="text-center space-y-3">
          <div className="bg-slate-700 h-15 rounded-2xl mx-auto max-w-xl"></div>
          <div className="bg-slate-700 h-10 rounded-2xl mx-auto max-w-md"></div>
        </header>

        {/* Sección Destacada */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-200">
            Selección Destacada
          </h3>

          <div className="relative w-full h-80 sm:h-120 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-slate-700"></div>
        </section>
        <section className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold text-gray-200">
            Carpetas de trabajo
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="relative w-full h-52 overflow-hidden">                  
                  <div className="absolute inset-0 bg-slate-700 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="relative w-full h-52 overflow-hidden">                  
                  <div className="absolute inset-0 bg-slate-700 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="relative w-full h-52 overflow-hidden">                  
                  <div className="absolute inset-0 bg-slate-700 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="relative w-full h-52 overflow-hidden">                  
                  <div className="absolute inset-0 bg-slate-700 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Datos de ejemplo para las carpetas (puedes reemplazarlo con tu futura BD)
const sampleFolders = [
  { id: 1, title: "Bosque de Niebla", photosCount: 48, image: "/fondo.jpg" },
  { id: 2, title: "Costa Selvática", photosCount: 35, image: "/fondo.jpg" },
  { id: 3, title: "Raíces Milenarias", photosCount: 52, image: "/fondo.jpg" },
  { id: 4, title: "Fauna Oculta", photosCount: 29, image: "/fondo.jpg" },
];

// Este componente simulará la llamada a tu Base de Datos (en el futuro aquí harás tu fetch o consulta a Prisma/Supabase/etc.)
async function UniverseData({ id }: { id: string }) {
  try {
    const res = await fetch(`https://potterhead-api.vercel.app/api/characters`);
    // Verificamos si la respuesta fue exitosa (status 200-299)
    console.log("1");
    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status} ${res.statusText}`);
    }
    console.log("2");
    const data = await res.json();
    console.log("Datos de la API:", data);
  } catch (error) {
    console.error("Fallo al obtener los datos de la API:", error);
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header del Universo */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Mundo natural: Bosques de primavera
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explorando las maravillas y la mística de los entornos naturales a
            través del lente fotográfico.
          </p>
        </header>

        {/* Sección Destacada */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-200">
            Selección Destacada
          </h3>

          {/* Contenedor relativo con altura definida o aspect ratio para Image fill */}
          <div className="relative w-full h-80 sm:h-120 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/fondo.jpg"
              alt="Fotografía destacada del universo"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Gradient overlay opcional para mejorar elegancia */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>
        <section className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold text-gray-200">
            Carpetas de trabajo
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleFolders.map((folder) => (
              <div
                key={folder.id}
                className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-lg hover:border-neutral-700 transition-all duration-300 cursor-pointer"
              >
                {/* Imagen miniatura de la carpeta */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={folder.image}
                    alt={folder.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {/* Overlay sutil para oscurecer la tarjeta al pasar el mouse */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Información de la carpeta */}
                <div className="p-4 space-y-1">
                  <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {folder.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {folder.photosCount} fotos
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

interface UniversePageProps {
  params: Promise<{
    id: string;
  }>;
}

// Página principal de la ruta dinámica
export default async function UniversePage({ params }: UniversePageProps) {
  const { id } = await params;

  return (
    /* Envolvemos en Suspense para que muestre el esqueleto mientras UniverseData resuelve */
    <Suspense fallback={<UniverseSkeleton />}>
      <UniverseData id={id} />
    </Suspense>
  );
}
