export default function Card() {
    return (
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-lg md:max-w-md sm:max-w-sm">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src="https://picsum.photos/200/300?grayscale" alt="Imagen"></img>
                </div>
                <div className="p-4">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Categoría</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Título de la tarjeta</a>
                    <p className="mt-2 text-gray-500">Descripción de la tarjeta. Puedes agregar aquí más información sobre el contenido de la tarjeta.</p>
                    <div className="mt-4">
                        <a href="#" className="text-indigo-500 hover:text-indigo-600">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    );
}