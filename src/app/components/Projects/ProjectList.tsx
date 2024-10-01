import { useTable } from "react-table";
import { useState, useMemo } from "react";
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectList() {
  const [projects] = useState([
    { id: 1, name: "Proyecto A", status: "En progreso" },
    { id: 2, name: "Proyecto B", status: "Completado" },
    { id: 3, name: "Proyecto C", status: "Pendiente" },
  ]);

  // Definir las columnas para React Table
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id", // clave en el objeto de proyecto
      },
      {
        Header: "Nombre del Proyecto",
        accessor: "name", // clave en el objeto de proyecto
      },
      {
        Header: "Estado",
        accessor: "status",
        Cell: ({ value }) => (
          <div className="flex items-center space-x-2">
            {value === "Completado" && (
              <FaCheckCircle className="text-green-500" />
            )}
            {value === "En progreso" && (
              <FaHourglassHalf className="text-yellow-500" />
            )}
            {value === "Pendiente" && (
              <FaTimesCircle className="text-red-500" />
            )}
            <span>{value}</span>
          </div>
        ),
      },
    ],
    []
  );

  // Utiliza el hook useTable de react-table
  const data = useMemo(() => projects, [projects]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Lista de Proyectos</h1>
      <motion.table
        {...getTableProps()}
        className="min-w-full bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 px-4 border-b-2 border-gray-300 text-left"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <motion.tr
                {...row.getRowProps()}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 hover:bg-gray-200"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-2 px-4 border-b text-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </motion.tr>
            );
          })}
        </tbody>
      </motion.table>
    </div>
  );
}

export default ProjectList;
