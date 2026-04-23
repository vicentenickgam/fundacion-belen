import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";
import { motion } from "framer-motion";

const categorias = [
  { label: "Salud", value: "salud" },
  { label: "Educación", value: "educacion" },
  { label: "Agropecuario", value: "agropecuario" },
  { label: "Civil", value: "civil" },
  { label: "Bienestar", value: "bienestar" },
  { label: "Deporte", value: "deporte" },
];

const Videos = () => {
  const [searchParams] = useSearchParams();
  const categoriaURL = searchParams.get("categoria");

  const [categoriaActiva, setCategoriaActiva] = useState("salud");

  useEffect(() => {
    if (categoriaURL) setCategoriaActiva(categoriaURL);
  }, [categoriaURL]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 px-6 min-h-screen bg-gray-50"
    >
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Galería de Videos
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategoriaActiva(cat.value)}
            className={`px-4 py-2 rounded-full ${
              categoriaActiva === cat.value
                ? "bg-green-700 text-white"
                : "bg-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <VideoSection folder={categoriaActiva} />
    </motion.div>
  );
};

export default Videos;