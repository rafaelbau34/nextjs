import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">Mi Proyecto</span>
        </div>
        <div className="flex space-x-4">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/chavos">Chavos</NavLink>
          <NavLink href="/conocenos">Conocenos</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
          <NavLink href="/ofertas">Ofertas</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
        {children}
      </div>
    </Link>
  );
};

export default Navbar;
