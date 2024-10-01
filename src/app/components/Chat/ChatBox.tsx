import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "Juan", text: "Hola, ¿cómo estás?" },
    { sender: "Tú", text: "Todo bien, ¿y tú?" },
    { sender: "Juan", text: "Bien también, gracias por preguntar." },
    { sender: "Tú", text: "¿Cómo va el proyecto?" },
    { sender: "Juan", text: "Va bien, aún estoy trabajando en los detalles." },
    { sender: "Tú", text: "Perfecto, seguimos en contacto." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "Tú", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[75vh] max-w-screen-lg mx-auto p-4 sm:p-8 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Chat en Vivo
      </h1>

      {/* Contenedor del chat con mayor altura */}
      <ScrollToBottom className="flex-1 bg-white p-4 overflow-auto rounded-lg shadow-lg max-h-[55vh]">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`mb-4 p-3 rounded-lg ${
              msg.sender === "Tú"
                ? "bg-blue-500 text-white self-end text-right"
                : "bg-gray-200 text-gray-900 self-start text-left"
            } w-fit max-w-xs sm:max-w-md`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="block font-semibold mb-1">
              {msg.sender === "Tú" ? "Tú" : msg.sender}
            </span>
            <span>{msg.text}</span>
          </motion.div>
        ))}
      </ScrollToBottom>

      {/* Input para nuevo mensaje */}
      <div className="mt-4 flex w-full max-w-screen-lg mx-auto">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 p-3 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <motion.button
          onClick={handleSendMessage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500 flex items-center justify-center shadow-sm"
        >
          <FaPaperPlane className="mr-2" />
          Enviar
        </motion.button>
      </div>
    </div>
  );
}

export default ChatBox;
