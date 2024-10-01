import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaProjectDiagram,
  FaComments,
  FaUserFriends,
  FaCog,
  FaChartPie,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";

function Sidebar() {
  return (
    <div className="bg-gray-800 w-64 h-screen p-6 text-white space-y-8">
      {/* Logo o título del sidebar */}
      <div className="text-center flex items-center justify-center space-x-2">
        <h2 className="text-2xl font-bold text-blue-400">Intranet</h2>
        <p className="text-sm text-gray-400">Empresarial</p>
      </div>

      {/* Navegación principal */}
      <nav>
        <ul className="space-y-6 mt-10">
          {/* Sección Principal */}
          <li className="text-gray-400 text-sm">Principal</li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/dashboard"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaTachometerAlt className="text-2xl" />
                <span className="text-lg">Dashboard</span>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/documents"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaFileAlt className="text-2xl" />
                <span className="text-lg">Documentos</span>
              </Link>
            </motion.div>
          </li>

          {/* Sección Proyectos */}
          <li className="text-gray-400 text-sm mt-8">Proyectos</li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaProjectDiagram className="text-2xl" />
                <span className="text-lg">Proyectos</span>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/calendar"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaRegCalendarAlt className="text-2xl" />
                <span className="text-lg">Calendario</span>
              </Link>
            </motion.div>
          </li>

          {/* Dropdown de más opciones */}
          <li>
            <Menu>
              <Menu.Button className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200">
                <FaProjectDiagram className="text-2xl" />
                <span className="text-lg">Más opciones</span>
              </Menu.Button>
              <Menu.Items className="flex flex-col mt-2 space-y-2 bg-gray-700 rounded shadow-lg">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/opcion1"
                      className={`p-2 text-white text-sm ${
                        active ? "bg-blue-500" : "bg-gray-700"
                      }`}
                    >
                      Opción 1
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/opcion2"
                      className={`p-2 text-white text-sm ${
                        active ? "bg-blue-500" : "bg-gray-700"
                      }`}
                    >
                      Opción 2
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>

          {/* Sección Otros */}
          <li className="text-gray-400 text-sm mt-8">Otros</li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/chat"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaComments className="text-2xl" />
                <span className="text-lg">Chat</span>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/teams"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaUserFriends className="text-2xl" />
                <span className="text-lg">Equipos</span>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/analytics"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaChartPie className="text-2xl" />
                <span className="text-lg">Analíticas</span>
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/settings"
                className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <FaCog className="text-2xl" />
                <span className="text-lg">Configuraciones</span>
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
