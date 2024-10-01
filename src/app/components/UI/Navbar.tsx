import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-gray-800 p-4 text-white z-10 shadow-lg">
      {/* Ajustar el contenedor con max-w-screen-xl para limitar el ancho total */}
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl px-4">
        {/* Mantener el título en su posición */}
        <h1 className="text-2xl font-bold ml-[-250px]">Intranet Empresarial</h1>

        {/* Menú de usuario alineado a la derecha */}
        <div className="flex items-center space-x-6">
          {/* Menú desplegable con opciones */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 focus:outline-none">
              <FaUserCircle className="text-3xl" />
              <span className="text-white">Perfil</span>
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/profile"
                    className={`block px-4 py-2 text-sm text-white ${
                      active ? "bg-gray-600" : ""
                    }`}
                  >
                    Mi perfil
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/settings"
                    className={`block px-4 py-2 text-sm text-white ${
                      active ? "bg-gray-600" : ""
                    }`}
                  >
                    Configuración
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/logout"
                    className={`block px-4 py-2 text-sm text-white ${
                      active ? "bg-gray-600" : ""
                    }`}
                  >
                    Cerrar sesión
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          {/* Botón animado para cerrar sesión */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center"
          >
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-400">
              Cerrar sesión
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
