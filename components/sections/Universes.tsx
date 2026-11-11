import UniverseCard from "../ui/UniverseCard";

type ColorScheme = "verde" | "azul" | "rojo" | "oscuro" | "amarillo";

const data: { title: string; subtitle: string; imageSrc: string; number: string; colorScheme: ColorScheme }[] = [
  { title: "Spaces", subtitle: "Arquitectura · Inmuebles · Hospitalidad", imageSrc: "/fondo.jpg", number: "01", colorScheme: "verde" },
  { title: "Sports", subtitle: "Arquitectura · Inmuebles · Hospitalidad", imageSrc: "/fondo.jpg", number: "02", colorScheme: "azul" },
  { title: "Studio", subtitle: "Arquitectura · Inmuebles · Hospitalidad", imageSrc: "/fondo.jpg", number: "03", colorScheme: "rojo" },
  { title: "Events", subtitle: "Arquitectura · Inmuebles · Hospitalidad", imageSrc: "/fondo.jpg", number: "04", colorScheme: "amarillo" },
  { title: "Brands", subtitle: "Arquitectura · Inmuebles · Hospitalidad", imageSrc: "/fondo.jpg", number: "05", colorScheme: 'oscuro' }
];

export default function Universes(){
    return(
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 p-6 justify-items-center bg-blue-950  ">
          {data.map((universe, index) => (
            <UniverseCard
                  key={index}
                  imageSrc="/fondo.jpg"
                  number={universe.number}
                  title={universe.title}
                  subtitle={universe.subtitle}
                  colorScheme={universe.colorScheme}
                />
          ))}
              </section>
    )
}