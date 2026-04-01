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

const Programas = () => {
  const navigate = useNavigate();

const programas = [
  { title: "Salud", description: "Atención integral en salud comunitaria", icon: <HeartPulse size={32} />, value: "salud" },
  { title: "Educación", description: "Formación y fortalecimiento educativo", icon: <BookOpen size={32} />, value: "educacion" },
  { title: "Agropecuario", description: "Desarrollo de proyectos productivos rurales", icon: <Leaf size={32} />, value: "agropecuario" },
  { title: "Civil", description: "Desarrollo de infraestructura comunitaria", icon: <Building2 size={32} />, value: "civil" },
  { title: "Bienestar", description: "Atención social y fortalecimiento comunitario", icon: <Users size={32} />, value: "bienestar" },
  { title: "Deporte", description: "Promoción del deporte y la integración social", icon: <Trophy size={32} />, value: "deporte" },
];

  const handleClick = (categoria) => {
    navigate(`/videos?categoria=${categoria}`);
  };

  return (
    <div className="h-full flex flex-col justify-center px-6 bg-gray-50 overflow-hidden">

      {/* TÍTULO */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nuestros Programas
        </h1>
        <p className="text-gray-600 text-sm mt-2">
          Áreas donde generamos impacto social
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
        {programas.map((prog, index) => (
          <div
            key={index}
            onClick={() => handleClick(prog.value)}
            className="cursor-pointer transform hover:scale-105 transition duration-300"
          >
            <Card
              title={prog.title}
              description={prog.description}
              icon={prog.icon}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Programas;