export default function MobileNavbar() {
    return (
        <nav className="flex md:hidden justify-between">
            <div className="logo">
                <p>Dataextract</p>
            </div>
            <ul className="flex space-x-6">
                <li>Blog</li>
                <li>Services</li>
                <li>About</li>
                <li>Home</li>
            </ul>
        </nav>
    )
}