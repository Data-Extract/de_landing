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
                    style={{ mixBlendMode: 'multiply' }}
                />
                <span className="text-xl font-bold">Data Extract</span>
            </div>

            {/* Menú de Navegación */}
            <div className="flex items-center space-x-8 text-base font-medium">
                <a href="#home" className="hover:text-blue-400 cursor-pointer">Home</a>
                <a href="#services" className="hover:text-blue-400 cursor-pointer">Services</a>
                <a href="#about" className="hover:text-blue-400 cursor-pointer">About</a>
                <a href="#blog" className="hover:text-blue-400 cursor-pointer">Blog</a>
                <a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a>

                {/* Botón CTA */}
                <a href="#booking">
                    <button className="ml-4 px-5 py-2 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg shadow transition duration-300">
                        Book now
                    </button>
                </a>
            </div>
        </nav>
    );
}
