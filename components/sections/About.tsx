export default function About() {
    const items = [
        { title: "Primero, escuchamos", description: "Entendemos qué quieres contar y a quién quieres llegar." },
        { title: "Después, creamos", description: "Diseñamos la sesión o cobertura con una intención clara." },
        { title: "Hacemos que se vea", description: "Fotografía, video y perspectivas aéreas para darle vista." }
    ]

    return (
        <div className="w-full bg-blue-950/50 z-10">
            <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col justify-center grow text-white">
                
                <div className="max-w-3xl mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        La idea es tuya. La mirada es nuestra.
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100/80 font-normal leading-relaxed">
                        Somos Andrés y Juan. Aikos nace de una idea sencilla: todo tiene algo que vale la pena mostrar. Nosotros buscamos el ángulo, el ritmo y la historia para hacerlo.
                    </p>
                </div>

                <hr className="border-blue-900/80 mb-2" />

                <div className="flex flex-col">
                    {items.map((item, index) => (
                        <div key={index} className="group">
                            <div className="py-6 flex items-start gap-6 md:gap-12">
                                <div className="pt-1">
                                    <span className="text-sm md:text-base font-mono text-blue-400/90 tracking-wider">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1.5 max-w-2xl">
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-100/70 text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <hr className="border-blue-900/60 transition-colors group-hover:border-blue-700/60" />
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}