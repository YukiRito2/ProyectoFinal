import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCloudUploadAlt } from "react-icons/fa"; // Ícono de descarga y carga
import { toast, ToastContainer } from "react-toastify"; // Para notificaciones
import "react-toastify/dist/ReactToastify.css"; // Estilos para React Toastify
import UploadDocument from "./UploadDocument";

function DocumentsList() {
  const [showUpload, setShowUpload] = useState(false);

  // Función para manejar la descarga y mostrar una notificación
  const handleDownload = (documentName: string) => {
    toast.success(`Descargando ${documentName}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Función para mostrar u ocultar el área de subida
  const toggleUpload = () => {
    setShowUpload(!showUpload);
  };

  return (
    <div className="p-8">
      {/* Contenedor de las notificaciones */}
      <ToastContainer />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestión de Documentos</h1>
        {/* Botón para mostrar el área de subida de documentos */}
        <button
          onClick={toggleUpload}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
        >
          <FaCloudUploadAlt className="mr-2" />
          Subir Documento
        </button>
      </div>

      {/* Mostrar el componente de subir documentos solo cuando se haga clic en el botón */}
      {showUpload && (
        <div className="mb-6">
          <UploadDocument />
        </div>
      )}

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Lista de documentos con animación */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          className="flex justify-between items-center p-4 bg-white rounded shadow-md"
        >
          <span>Documento 1</span>
          <button
            className="flex items-center text-blue-500 hover:text-blue-400"
            onClick={() => handleDownload("Documento 1")}
          >
            <FaDownload className="mr-2" />
            Descargar
          </button>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          className="flex justify-between items-center p-4 bg-white rounded shadow-md"
        >
          <span>Documento 2</span>
          <button
            className="flex items-center text-blue-500 hover:text-blue-400"
            onClick={() => handleDownload("Documento 2")}
          >
            <FaDownload className="mr-2" />
            Descargar
          </button>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default DocumentsList;
