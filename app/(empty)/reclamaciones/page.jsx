"use client";

import './reclamaciones.css';
import React, { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    documento: '', // Cambiado de tipoDocumento
    numeroDocumento: '', // Cambiado de documento
    email: '', // Cambiado de correo
    celular: '',
    direccion: '',
    distrito: '',
    ciudad: '',
    tipoReclamo: '',
    servicioContratado: '',
    reclamoPerson: '', // Cambiado de incidente
    checkReclamoForm: 'false', // Cambiado de conoceReclamo
    aceptaPoliticaPrivacidad: 'false' // Cambiado de aceptaPoliticas
  });

  
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked.toString() : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError('');
    setMensaje('');

    try {
      const response = await fetch('https://back.digimediamkt.com/api/reclamaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      let result = {};

      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result.message = await response.text();
      }

      if (response.ok) {
        setMensaje('Su solicitud fue enviada correctamente.');
        setFormData({
          nombre: '',
          apellido: '',
          documento: '',
          numeroDocumento: '',
          email: '',
          celular: '',
          direccion: '',
          distrito: '',
          ciudad: '',
          tipoReclamo: '',
          servicioContratado: '',
          reclamoPerson: '',
          checkReclamoForm: 'false',
          aceptaPoliticaPrivacidad: 'false'
        });
      } else {
        const errorMessage = result.message || result.error || 'Hubo un error al enviar el reclamo. Por favor, intenta nuevamente.';
        setError(errorMessage);
        console.error('Detalles del error:', {
          status: response.status,
          statusText: response.statusText,
          body: result
        });
      }
    } catch (error) {
      console.error('Error de red:', error);
      setError('Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#6f4be8] flex justify-center items-center">
        <img src="/headerFooter/logoFooter.webp" alt="Digimedia" className="my-10 w-40 h-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Libro de Reclamaciones</h1>
          <p className="text-sm text-gray-600 mb-2">
            Conforme está establecido en el Código de Protección y Defensa del Consumidor contamos con un Libro de Reclamaciones Virtual a tu disposición DigiMedia.com
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Debes de tener en cuenta que tus reclamos conforme a ley deben ser resueltos en un plazo no mayor a 30 días, pudiendo extenderse el plazo cuando la naturaleza del reclamo lo acredite. Art. 24.1 Ley 29571.
          </p>
          <p className="text-sm font-semibold mb-4">
            Razón Social: DIGIMEDIA MARKETING S.A.C. RUC: 20605116559
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center mb-6">Cuestionario de quejas</h2>

          {mensaje && (
            <div className="text-center mb-4 p-4 text-green-500 bg-green-50 border border-green-200 rounded">
              {mensaje}
            </div>
          )}

          {error && (
            <div className="text-center mb-4 p-4 text-red-500 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h3 className="font-semibold">Datos Personales:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className="w-full p-2 border rounded"
                  required
                />
                <select
                  name="documento"
                  value={formData.documento}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Tipo de Documento</option>
                  <option value="DNI">DNI</option>
                  <option value="RUC">RUC</option>
                  <option value="CE">CE</option>
                  <option value="PTP">PTP</option>
                  <option value="OTROS">OTROS...</option>
                </select>
                <input
                  type="text"
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  placeholder="Número de Documento"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  placeholder="Celular"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Dirección"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="distrito"
                  value={formData.distrito}
                  onChange={handleChange}
                  placeholder="Distrito"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Ciudad"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Datos de incidente:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="tipoReclamo"
                  value={formData.tipoReclamo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Tipo de reclamo</option>
                  <option value="QUEJA">QUEJA</option>
                  <option value="RECLAMO">RECLAMO</option>
                </select>
                <select
                  name="servicioContratado"
                  value={formData.servicioContratado}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Servicio contratado</option>
                  <option value="TECHNOLOGY">TECHNOLOGY</option>
                  <option value="OTROS">OTROS</option>
                </select>
              </div>
              <textarea
                name="reclamoPerson"
                value={formData.reclamoPerson}
                onChange={handleChange}
                placeholder="Indicar incidente"
                className="w-full p-2 border rounded h-32"
                required
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="checkReclamoForm"
                  checked={formData.checkReclamoForm === 'true'}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <p className="text-sm">
                  Soy consciente que la formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. *El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, de acuerdo a la Ley 29571
                </p>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="aceptaPoliticaPrivacidad"
                  checked={formData.aceptaPoliticaPrivacidad === 'true'}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <p className="text-sm">
                  Acepto las Políticas de Privacidad.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full p-2 rounded text-white transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed'
                  : formData.aceptaPoliticaPrivacidad === 'true' && formData.checkReclamoForm === 'true'
                    ? 'bg-[#6f4be8] hover:bg-[#5c40d1]' 
                    : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={isSubmitting || formData.aceptaPoliticaPrivacidad === 'false' || formData.checkReclamoForm === 'false'}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Reclamación'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;