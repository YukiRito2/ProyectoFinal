import Widgets from "./Widgets";
import { FaTasks, FaProjectDiagram, FaBell } from "react-icons/fa"; // Iconos de React Icons
import { motion } from "framer-motion"; // Animaciones de Framer Motion
import { Line } from "react-chartjs-2"; // Gráficos con React Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes de Chart.js manualmente
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DashboardHome() {
  // Datos de ejemplo para el gráfico de tareas pendientes
  const data = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    datasets: [
      {
        label: "Tareas Completadas",
        data: [12, 19, 3, 5, 2],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Proyectos actuales de ejemplo
  const proyectosActuales = [
    {
      nombre: "Sistema de Gestión Empresarial",
      estado: "En progreso",
      avance: "70%",
    },
    {
      nombre: "Aplicación Móvil para Clientes",
      estado: "En progreso",
      avance: "50%",
    },
    {
      nombre: "Migración a la Nube",
      estado: "Completado",
      avance: "100%",
    },
  ];

  // Notificaciones de ejemplo
  const notificaciones = [
    "Nuevo comentario en el proyecto 'Sistema de Gestión Empresarial'.",
    "El proyecto 'Migración a la Nube' ha sido completado.",
    "Actualización pendiente para el proyecto 'Aplicación Móvil para Clientes'.",
  ];

  return (
    <div className="p-8">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bienvenido al Panel de Control
      </motion.h1>
      <div className="grid grid-cols-3 gap-6">
        {/* Tareas Pendientes */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="shadow-lg p-4 bg-white rounded-lg"
        >
          <FaTasks className="text-blue-500 text-4xl mb-4" />
          <Widgets title="Tareas Pendientes" />
          <Line data={data} options={options} />
        </motion.div>

        {/* Proyectos Actuales */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="shadow-lg p-4 bg-white rounded-lg"
        >
          <FaProjectDiagram className="text-green-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Proyectos Actuales</h2>
          <ul className="space-y-4">
            {proyectosActuales.map((proyecto, index) => (
              <li key={index} className="border-b pb-2">
                <h3 className="text-lg font-semibold">{proyecto.nombre}</h3>
                <p>Estado: {proyecto.estado}</p>
                <p>Avance: {proyecto.avance}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Notificaciones */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="shadow-lg p-4 bg-white rounded-lg"
        >
          <FaBell className="text-yellow-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
          <ul className="space-y-2">
            {notificaciones.map((notificacion, index) => (
              <li key={index} className="text-sm text-gray-600">
                • {notificacion}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default DashboardHome;
