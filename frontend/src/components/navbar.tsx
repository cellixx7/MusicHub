import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-semibold text-white tracking-wide">
        MusicHub
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-sm text-zinc-300">
        <li className="hover:text-white cursor-pointer transition">Home</li>
        <li className="hover:text-white cursor-pointer transition">Explorar</li>
        <li className="hover:text-white cursor-pointer transition">Artistas</li>
        <li className="hover:text-white cursor-pointer transition">Contato</li>
      </ul>

      {/* Botão mobile */}
      <button className="md:hidden text-white text-xl">
        ☰
      </button>
    </nav>
  );
}
