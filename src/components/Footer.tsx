import { Github } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold tracking-wide">
            AMJ-PR - Ação Missionária Juvenil
          </p>
          <p className="text-sm text-neutral-400">
            © {year} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">

          <a
            href="https://github.com/Mfrozzz/amj-page"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="GitHub do projeto"
          >
            <Github size={24} />
          </a>

          <a
            href="https://dombosco.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-yellow-400 transition"
          >
            Salesianos Sul
          </a>

          <a
            href="https://github.com/Mfrozzz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-yellow-400 transition text-center"
          >
            Desenvolvido por: <br/> M.V. Boava - AJS Guarapuava.
          </a>

        </div>
      </div>
    </footer>
  );
}