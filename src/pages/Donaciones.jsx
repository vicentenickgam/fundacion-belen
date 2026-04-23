import { motion } from "framer-motion";
import daviviendaLogo from "../assets/davivienda.png";
import nequiLogo from "../assets/nequi.png";

const Donaciones = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 px-6 overflow-hidden">

      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center"
      >
        Apoya Nuestra Causa
      </motion.h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">

        {/* DAVIVIENDA */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-between items-center rounded-2xl shadow-xl px-4 py-4"
          style={{
            background: "linear-gradient(135deg, #c8102e, #8a0c1f)",
          }}
        >
          {/* TEXTO */}
          <div className="text-white">
            <p className="text-sm opacity-70">Cuenta de Ahorros</p>

            <h3 className="text-2xl font-bold mt-2">
              Davivienda
            </h3>

            <p className="text-xl tracking-widest mt-4">
              0013 0826 0001 0002 9712
            </p>

            <p className="text-sm mt-6 opacity-80">
              Fundación Belén
            </p>
          </div>

          {/* LOGO */}
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center ml-4">
            <img
              src={daviviendaLogo}
              alt="Davivienda"
              className="max-w-[70%] max-h-[70%] object-contain"
            />
          </div>
        </motion.div>

        {/* NEQUI */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-between items-center rounded-2xl shadow-xl px-4 py-4"
          style={{
            background: "linear-gradient(135deg, #6a00f4, #3f00a8)",
          }}
        >
          {/* TEXTO */}
          <div className="text-white">
            <p className="text-sm opacity-70">Transferencia móvil</p>

            <h3 className="text-2xl font-bold mt-2">
              Nequi
            </h3>

            <p className="text-2xl tracking-widest mt-4">
              321 655 9792
            </p>

            <p className="text-sm mt-6 opacity-80">
              Fundación Belén
            </p>
          </div>

          {/* LOGO */}
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center ml-4">
            <img
              src={nequiLogo}
              alt="Nequi"
              className="max-w-[70%] max-h-[70%] object-contain"
            />
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default Donaciones;