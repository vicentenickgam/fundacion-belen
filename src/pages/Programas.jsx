import Card from "../components/Card";
import {
  HeartPulse,
  BookOpen,
  Leaf,
  Building2,
  Users,
  Trophy,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Programas = () => {
  const navigate = useNavigate();

  const programas = [
    {
      title: "Salud",
      description:
        "Servicios de enfermería, salud mental y programas de atención comunitaria",
      icon: <HeartPulse size={32} />,
      value: "salud",
    },
    {
      title: "Educación",
      description:
        "Capacitaciones, apoyo escolar y fortalecimiento educativo en comunidades",
      icon: <BookOpen size={32} />,
      value: "educacion",
    },
    {
      title: "Agropecuario",
      description:
        "Proyectos productivos sostenibles y asistencia técnica rural",
      icon: <Leaf size={32} />,
      value: "agropecuario",
    },
    {
      title: "Civil",
      description:
        "Construcción y mantenimiento de infraestructura comunitaria",
      icon: <Building2 size={32} />,
      value: "civil",
    },
    {
      title: "Bienestar",
      description:
        "Programas sociales para infancia, adultos mayores y familias",
      icon: <Users size={32} />,
      value: "bienestar",
    },
    {
      title: "Deporte",
      description:
        "Actividades deportivas y recreativas para integración social",
      icon: <Trophy size={32} />,
      value: "deporte",
    },
  ];

  const handleClick = (categoria) => {
    navigate(`/videos?categoria=${categoria}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 bg-gray-50">

      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nuestros Programas
        </h1>
        <p className="text-gray-600 text-sm mt-2">
          Áreas donde generamos impacto social
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">

        {programas.map((prog, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(prog.value)}
            className="cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              title={prog.title}
              description={prog.description}
              icon={prog.icon}
            />
          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Programas;