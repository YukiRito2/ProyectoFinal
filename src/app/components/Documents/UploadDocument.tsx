import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Estilos para React Toastify
import { FaCloudUploadAlt } from "react-icons/fa"; // Ícono de carga

function UploadDocument() {
  // Manejar la carga de archivos
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Aquí puedes procesar el archivo como desees
        toast.success(`${file.name} se ha subido correctamente`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    }, // Usando el tipo correcto para accept
  });

  return (
    <div className="p-8">
      {/* Contenedor de notificaciones */}
      <ToastContainer />

      <h1 className="text-3xl font-bold mb-6">Subir Documento</h1>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-10 rounded-lg flex flex-col items-center justify-center cursor-pointer ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <FaCloudUploadAlt className="text-6xl text-blue-500 mb-4" />
        {isDragActive ? (
          <p className="text-blue-500">Suelta el archivo aquí...</p>
        ) : (
          <p className="text-gray-500">
            Arrastra y suelta archivos aquí, o haz clic para seleccionar
            archivos
          </p>
        )}
      </div>
    </div>
  );
}

export default UploadDocument;
