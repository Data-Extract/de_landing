import Image from 'next/image';

export default function DesktopNavbar() {
    return (
        <nav className="hidden md:flex justify-between items-center w-full px-6 py-4 text-white">
            {/* Logo + Nombre */}
            <div className="flex items-center space-x-2">
                <Image
                    src="/logo.jpg"
                    alt="Logo DataExtract"
                    width={70}
                    height={70}
                    className="rounded-full"
                />
                <span className="text-xl font-bold">Data Extract</span>
            </div>

            {/* Menú de Navegación */}
            <div className="flex items-center space-x-8 text-base font-medium">
                <span className="hover:text-blue-400 cursor-pointer">Home</span>
                <span className="hover:text-blue-400 cursor-pointer">Services</span>
                <span className="hover:text-blue-400 cursor-pointer">About</span>
                <span className="hover:text-blue-400 cursor-pointer">Blog</span>
                <span className="hover:text-blue-400 cursor-pointer">Contact</span>

                {/* Botón CTA */}
                <button className="ml-4 px-5 py-2 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg shadow transition duration-300">
                    Book now
                </button>
            </div>
        </nav>
    );
}
