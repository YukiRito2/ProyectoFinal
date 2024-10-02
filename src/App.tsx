import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./app/components/Auth/Login";
import Register from "./app/components/Auth/Register";
import DashboardHome from "./app/components/Dashboard/DashboardHome";
import DocumentsList from "./app/components/Documents/DocumentsList";
import ProjectList from "./app/components/Projects/ProjectList";
import ChatBox from "./app/components/Chat/ChatBox";
import Navbar from "./app/components/UI/Navbar";
import Sidebar from "./app/components/UI/Sidebar";
import Analytics from "./app/components/Analytics/Analytics"; // Importa la nueva vista
import CalendarPage from "./app/components/Calendar/CalendarPage"; // Importa la nueva vista

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          {/* Ajuste del Navbar */}
          <Navbar />
          <div className="pt-20 p-8">
            {" "}
            {/* Espacio adicional para que el contenido no quede debajo del Navbar */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/documents" element={<DocumentsList />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/chat" element={<ChatBox />} />
              <Route path="/analytics" element={<Analytics />} />{" "}
              <Route path="/calendar" element={<CalendarPage />} />{" "}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
