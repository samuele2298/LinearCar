const Azienda = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt="Company Image"
                                src="bg/1.jpg"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Linea Car, Milano</h2>

                            <p className="mt-4 text-gray-600">
                                Linea Car automobili is located in Milano.

                            </p>

                            <p className="mt-4 text-gray-600">
                                Via Piero Angela n.12 Milano

                            </p>

                            <p className="mt-4 text-gray-600">
                                Tel: {process.env.PHONE_NUMBER}<br />
                                Mail: {process.env.EMAIL}

                            </p>


                            <a
                                href={`mailto:${process.env.EMAIL}`}

                                className="mt-8 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-800 focus:outline-none "
                            >
                                Contattaci
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Azienda;