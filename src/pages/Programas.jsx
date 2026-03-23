import Card from "../components/Card";
import {
  HeartPulse,
  BookOpen,
  Leaf,
  Building2,
  Users,
  Trophy,
} from "lucide-react";

const Programas = () => {
  const programas = [
    {
      title: "Salud",
      description: "Servicios de enfermería, salud mental, control de vectores y programas de salud territorial.",
      icon: <HeartPulse size={40} />,
    },
    {
      title: "Educación",
      description: "Capacitaciones, dotaciones escolares, campañas educativas y apoyo a instituciones.",
      icon: <BookOpen size={40} />,
    },
    {
      title: "Agropecuario",
      description: "Asistencia técnica rural, proyectos productivos sostenibles y desarrollo agrícola.",
      icon: <Leaf size={40} />,
    },
    {
      title: "Civil",
      description: "Construcción, mantenimiento de infraestructura y proyectos comunitarios.",
      icon: <Building2 size={40} />,
    },
    {
      title: "Bienestar",
      description: "Programas para infancia, adultos mayores y atención social integral.",
      icon: <Users size={40} />,
    },
    {
      title: "Recreación y Deporte",
      description: "Actividades deportivas, recreativas y desarrollo comunitario.",
      icon: <Trophy size={40} />,
    },
  ];

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-8">Nuestros Programas</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {programas.map((prog, index) => (
          <Card
            key={index}
            title={prog.title}
            description={prog.description}
            icon={prog.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Programas;