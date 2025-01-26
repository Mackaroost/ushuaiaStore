import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 py-4 text-zinc-700">
      <div className="container mx-auto md:flex md:items-center md:justify-center md:gap-x-4">
        <p className="text-xs font-semibold">SoñandoUshuaia © {currentYear}</p>
        
        <Link
          className="text-xs font-semibold hover:underline hover:text-indigo-600 transition duration-200"
          href={'/contacto'}
        >
          Contacto
        </Link>
        
        <p className="text-xs font-semibold hover:underline hover:text-indigo-600 transition duration-200">
          Términos y Condiciones
        </p>
      </div>
    </footer>
  );
}

export default Footer;
