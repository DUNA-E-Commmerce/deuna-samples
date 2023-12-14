import { useState } from "react";
import "./App.css";
import "./styles.css";

export interface ProcessEnv {
  [key: string]: string | undefined;
}

export interface EditorResponseType {
  jsObject: object;
}

declare global {
  interface Window {
    DeunaCheckout: () => {
      configure: (val: {
        env: string | undefined;
        apiKey: string | undefined;
        orderToken: string;
      }) => void;
      show: () => void;
    };
  }
}
const App = () => {
  const [formData, setFormData] = useState({
    apiKey: "",
    nombre: "",
    apellido: "",
    email: "",
  });
  const [iFrameUrl, setIframeUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, email, apiKey } = formData;
    console.log(nombre, apellido, email);

    const enlace = `https://elements.stg.deuna.io/click_to_pay?publicApiKey=${apiKey}&nombre=${nombre}&apellido=${apellido}&email=${email}`;
    setIframeUrl(enlace);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="formulario-container">
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="cerrar" onClick={closeModal}>
              &times;
            </span>
            <iframe
              src={iFrameUrl}
              title="Ejemplo"
              className="iframe"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="apiKey">API Key:</label>
          <input
            type="text"
            id="apiKey"
            name="apiKey"
            value={formData.apiKey}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button className="submit-button" type="submit" onClick={openModal}>
          Abrir Iframe
        </button>
      </form>
    </div>
  );
};

export default App;
