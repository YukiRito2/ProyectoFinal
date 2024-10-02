import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import "moment/locale/es"; // Importar Moment.js en español

// Configurar Moment.js para que use el idioma español
moment.locale("es");

// Configurar localizador para la librería con Moment.js
const localizer = momentLocalizer(moment);

// Definir el tipo para los eventos
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}

// Lista de eventos
const events: CalendarEvent[] = [
  {
    title: "Reunión de equipo",
    start: new Date(2024, 9, 7, 10, 0), // Año, Mes (0 index), Día, Hora, Minutos
    end: new Date(2024, 9, 7, 12, 0),
    allDay: false,
  },
  {
    title: "Revisión de proyecto",
    start: new Date(2024, 9, 10, 14, 0),
    end: new Date(2024, 9, 10, 15, 0),
    allDay: false,
  },
  {
    title: "Presentación de resultados",
    start: new Date(2024, 9, 13, 9, 0),
    end: new Date(2024, 9, 13, 11, 0),
    allDay: false,
  },
];

// Traducciones de los textos del calendario a español
const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "No hay eventos en este rango",
  showMore: (total: number) => `+ Ver más (${total})`,
};

function CalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="p-8">
      <motion.h1
        className="text-3xl font-bold mb-6 flex items-center text-gray-700"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaCalendarAlt className="mr-2" /> Calendario de Eventos
      </motion.h1>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={handleSelectEvent}
          messages={messages} // Traducciones al español
        />
      </div>

      {selectedEvent && (
        <motion.div
          className="mt-6 p-4 bg-blue-100 rounded shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold">
            Detalles del evento: {selectedEvent.title}
          </h2>
          <p>
            Inicio: {moment(selectedEvent.start).format("LLL")} <br />
            Fin: {moment(selectedEvent.end).format("LLL")}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default CalendarPage;
