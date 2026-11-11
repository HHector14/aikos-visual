import UniverseCard from "../ui/UniverseCard";

export default function Universes(){
    return(
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 p-6 justify-items-center bg-blue-950  ">
                <UniverseCard
                  imageSrc="/fondo.jpg"
                  number="01"
                  title="Spaces"
                  subtitle="Arquitectura · Inmuebles · Hospitalidad"
                  colorScheme="verde"
                />
                <UniverseCard
                  imageSrc="/fondo.jpg"
                  number="02"
                  title="Sports"
                  subtitle="Arquitectura · Inmuebles · Hospitalidad"
                  colorScheme="azul"
                />
                <UniverseCard
                  imageSrc="/fondo.jpg"
                  number="03"
                  title="Studio"
                  subtitle="Arquitectura · Inmuebles · Hospitalidad"
                  colorScheme="rojo"
                />
                <UniverseCard
                  imageSrc="/fondo.jpg"
                  number="04"
                  title="Events"
                  subtitle="Arquitectura · Inmuebles · Hospitalidad"
                  colorScheme="amarillo"
        
                />
                <UniverseCard
                  imageSrc="/fondo.jpg"
                  number="05"
                  title="Brands"
                  subtitle="Arquitectura · Inmuebles · Hospitalidad"
                />
              </section>
    )
}