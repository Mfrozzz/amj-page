import logo from "/amjLogo.png";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full h-20 z-50 bg-black/50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                <a href="#home">
                    <img src={logo} alt="Logo AMJ" className="w-24" />
                </a>

                <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
                    <li><a href="#oque" className="hover:text-yellow-400 transition">O que é?</a></li>
                    <li><a href="#cidade" className="hover:text-yellow-400 transition">Cidade</a></li>
                    <li><a href="#checklist" className="hover:text-yellow-400 transition">Checklist</a></li>
                    <li><a href="#salesianos" className="hover:text-yellow-400 transition">Salesianos</a></li>
                    <li><a href="#ajs" className="hover:text-yellow-400 transition">AJS</a></li>
                </ul>

            </div>
        </nav>
    );
}