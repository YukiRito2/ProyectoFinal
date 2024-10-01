import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip"; // Importación corregida
import "react-tooltip/dist/react-tooltip.css"; // Importar el CSS de Tooltip

interface WidgetsProps {
  title: string;
}

function Widgets({ title }: WidgetsProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05 }} // Animación suave al hacer hover
      whileTap={{ scale: 0.95 }}
    >
      {/* Header con ícono y título */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {/* Asociar el Tooltip con data-tooltip-id */}
        <FaInfoCircle
          className="text-blue-500 text-xl cursor-pointer"
          data-tooltip-id="info-tooltip" // Asignar un ID al tooltip
        />
        {/* Tooltip usando el ID */}
        <Tooltip id="info-tooltip" place="top">
          Más información sobre este widget
        </Tooltip>
      </div>

      {/* Contenido del widget */}
      <p>Este es un widget interactivo con más contenido.</p>
    </motion.div>
  );
}

export default Widgets;
