import React, { useState } from "react";
import { motion } from "framer-motion";
import Switch from "react-switch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactSlider from "react-slider";
import {
  FaCogs,
  FaBell,
  FaMoon,
  FaSun,
  FaLanguage,
  FaLock,
} from "react-icons/fa";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoLogout, setAutoLogout] = useState(false);
  const [volume, setVolume] = useState(50);
  const [language, setLanguage] = useState("es");

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    toast.success(`Modo ${darkMode ? "Claro" : "Oscuro"} activado`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
    toast.success(
      `Notificaciones ${notificationsEnabled ? "desactivadas" : "activadas"}`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const handleAutoLogoutToggle = () => {
    setAutoLogout(!autoLogout);
    toast.success(`Auto-Logout ${autoLogout ? "desactivado" : "activado"}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div
      className={`p-8 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100"}`}
    >
      <ToastContainer />
      <motion.h1
        className="text-3xl font-bold mb-6 flex items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaCogs className="mr-2" /> Configuraciones
      </motion.h1>

      {/* Configuración de Modo Oscuro */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <FaMoon className="text-2xl text-gray-600" />
          <h2 className="text-xl font-semibold">Modo Oscuro</h2>
        </div>
        <Switch
          onChange={handleDarkModeToggle}
          checked={darkMode}
          uncheckedIcon={<FaSun className="text-yellow-500 ml-2" />}
          checkedIcon={<FaMoon className="text-blue-500 ml-2" />}
          onColor="#86d3ff"
          offColor="#ccc"
        />
      </motion.div>

      {/* Configuración de Notificaciones */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <FaBell className="text-2xl text-gray-600" />
          <h2 className="text-xl font-semibold">Notificaciones</h2>
        </div>
        <Switch
          onChange={handleNotificationsToggle}
          checked={notificationsEnabled}
          uncheckedIcon={<FaBell className="text-red-500 ml-2" />}
          checkedIcon={<FaBell className="text-green-500 ml-2" />}
          onColor="#86d3ff"
          offColor="#ccc"
        />
      </motion.div>

      {/* Configuración de Idioma */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <FaLanguage className="text-2xl text-gray-600" />
          <h2 className="text-xl font-semibold">Idioma</h2>
        </div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>
      </motion.div>

      {/* Configuración de Auto-Logout */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <FaLock className="text-2xl text-gray-600" />
          <h2 className="text-xl font-semibold">Auto-Logout</h2>
        </div>
        <Switch
          onChange={handleAutoLogoutToggle}
          checked={autoLogout}
          uncheckedIcon={<FaLock className="text-red-500 ml-2" />}
          checkedIcon={<FaLock className="text-green-500 ml-2" />}
          onColor="#86d3ff"
          offColor="#ccc"
        />
      </motion.div>

      {/* Configuración de Volumen */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-md mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-2">Volumen del Sistema</h2>
        <ReactSlider
          value={volume}
          onChange={setVolume}
          max={100}
          min={0}
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          renderThumb={(props, state) => (
            <div {...props} className="w-6 h-6 bg-blue-500 rounded-full"></div>
          )}
        />
        <p className="mt-2">Volumen actual: {volume}%</p>
      </motion.div>
    </div>
  );
}

export default Settings;
