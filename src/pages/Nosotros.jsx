import { Target, Eye, Flag } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

const Nosotros = () => {
  const cards = [
    {
      icon: <Target size={40} />,
      title: "Misión",
      text: "Brindar programas en educación, salud y desarrollo social..."
    },
    {
      icon: <Eye size={40} />,
      title: "Visión",
      text: "Ser una fundación reconocida a nivel nacional..."
    },
    {
      icon: <Flag size={40} />,
      title: "Objetivo",
      text: "Mejorar la calidad de vida de la población..."
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-gray-50 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Sobre Nosotros
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          La Fundación Belén trabaja por el bienestar social...
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                <div className="flex justify-center mb-3 text-green-600">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-green-700 mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Nosotros;