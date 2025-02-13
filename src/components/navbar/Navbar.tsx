'use client';
import Link from "next/link";
import { FaInstagram, FaWhatsappSquare, FaShoppingBag } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cartStore } from "@/store/storeCart/cartStore";

const Navbar = () => {
    const path = usePathname()
  const [openMenu, setOpenMenu] = useState(false);
  const cart = cartStore((state)=> state.cart.length)


  const navLink = [
    { href: "/productos", name: "Productos" },
    { href: "/como-comprar", name: "Cómo Comprar" },
  ];

  const contactLink = [
    { href: "/instagram/sa", icon: <FaInstagram size={24} />, label: "Instagram" },
    { href: "/tiktok/sa", icon: <AiFillTikTok size={24} />, label: "Tiktok" },
    {
      href: "https://wa.me/5491166259448?text=Hola,%20quiero%20más%20información%20sobre%20los%20productos%20de%20soñandoUshuaia",
      icon: <FaWhatsappSquare size={24} />,
      label: "Whatsapp",
      external: true, 
    },
  ];

  return (
    <nav className="w-full p-4 bg-gradient-to-r  shadow-lg ">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Contact Links */}
        <div className="flex justify-start gap-x-4">
          {contactLink.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              target={item.external ? "_blank" : "_self"}
              className="flex items-center text-black hover:text-gray-200 transition-transform transform hover:scale-110"
            >
              {item.icon}
              <span className="sr-only">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Centered Brand Name */}
        <div className="text-center">
          <Link href="/">
            <h2 className="text-center text-black font-bold text-2xl tracking-wide hover:text-gray-200 transition-colors">
              Dreaming Ushuaia
            </h2>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:items-center gap-x-6">
          {navLink.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={`${
                path === item.href
                  ? "text-black bg-red-400"
                  : "hover:text-gray-100"
              } px-4 py-2 rounded transition-colors`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/carrito"
            className="flex items-center text-black hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <div className="relative">
              <span className="absolute text-xs rounded px-1 font-bold -top-2 -right-2 bg-slate-50 text-black">
                  {cart}
              </span>
            <FaShoppingBag size={28} />
            </div>
          </Link>
        </div>

        {/* Burger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Toggle menu"
            className=" text-2xl"
          >
            {openMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden flex flex-col items-center bg-slate-50 text-black py-4 space-y-4">
          {navLink.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setOpenMenu(false)}
              className="hover:bg-red-500 px-4 py-2 rounded transition-colors w-full text-center"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/carrito"
            onClick={() => setOpenMenu(false)}
            className="flex items-center justify-center hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <FaShoppingBag size={28} />
            <span className="ml-2">Compras</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
