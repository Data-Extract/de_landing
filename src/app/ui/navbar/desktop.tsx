export default function DesktopNavbar() {
    return (
        <nav className="hidden md:flex justify-between">
            <div className="logo">
                <p>Dataextract</p>
            </div>
            <ul className="flex space-x-6">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </nav>
    )
}