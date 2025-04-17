export default function DesktopNavbar() {
    return (
        <nav className="hidden md:flex justify-between items-center w-full px-6 py-4 text-white">
            {/* Logo */}
            <div className="text-2xl font-bold">DataExtract</div>
            
            {/* Menú de Navegación */}
            <ul className="flex space-x-8 text-lg font-medium">
                <li className="hover:text-blue-400 cursor-pointer">Home</li>
                <li className="hover:text-blue-400 cursor-pointer">Services</li>
                <li className="hover:text-blue-400 cursor-pointer">About</li>
                <li className="hover:text-blue-400 cursor-pointer">Blog</li>
            </ul>

            {/* Botón de llamada a la acción */}
            <button className="px-6 py-2 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg shadow-lg transition duration-300">
             Book Now
            </button>

        </nav>
    )
}
