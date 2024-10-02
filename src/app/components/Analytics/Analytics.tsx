import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import { FaChartLine, FaChartBar } from "react-icons/fa";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Datos para el gráfico de línea (Crecimiento de ventas mensuales)
const lineChartData = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
  datasets: [
    {
      label: "Crecimiento de Ventas",
      data: [10000, 15000, 12000, 17000, 20000, 22000, 25000], // Datos ficticios de ventas
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.1,
    },
  ],
};

// Datos para el gráfico de barras (Rendimiento de empleados)
const barChartData = {
  labels: ["Juan", "Ana", "Luis", "Pedro", "Sofía"],
  datasets: [
    {
      label: "Tareas Completadas",
      data: [50, 70, 45, 80, 60], // Rendimiento de empleados en tareas completadas
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
    {
      label: "Tareas Pendientes",
      data: [10, 5, 15, 3, 8], // Tareas pendientes
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
};

// Opciones para los gráficos
const options = {
  responsive: true,
  maintainAspectRatio: false, // Para ajustar dinámicamente el tamaño
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Análisis de Rendimiento Empresarial",
    },
  },
};

function Analytics() {
  return (
    <div className="flex flex-col p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-700 text-center">
        Análisis de Rendimiento Empresarial
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gráfico de Línea - Crecimiento de Ventas */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: "350px", width: "100%" }} // Ajuste de altura y ancho
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-700 flex items-center">
              <FaChartLine className="mr-2" /> Crecimiento de Ventas Mensuales
            </h2>
          </div>
          <Line data={lineChartData} options={options} />
        </motion.div>

        {/* Gráfico de Barras - Rendimiento de Empleados */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: "350px", width: "100%" }} // Ajuste de altura y ancho
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-700 flex items-center">
              <FaChartBar className="mr-2" /> Rendimiento de Empleados
            </h2>
          </div>
          <Bar data={barChartData} options={options} />
        </motion.div>
      </div>
    </div>
  );
}

export default Analytics;
