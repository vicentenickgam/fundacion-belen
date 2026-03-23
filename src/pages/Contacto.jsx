const Contacto = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input className="border p-2 rounded" type="text" placeholder="Nombre" />
        <input className="border p-2 rounded" type="email" placeholder="Correo" />
        <textarea className="border p-2 rounded" rows="5" placeholder="Mensaje" />

        <button className="bg-green-700 text-white py-2 rounded hover:bg-green-800">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;