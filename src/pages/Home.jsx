import Hero from "../components/Hero";
import Card from "../components/Card";
import { Users, HeartHandshake, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />

      {/* SOBRE NOSOTROS */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          ¿Quiénes somos?
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          La Fundación Belén es una organización sin fines de lucro comprometida con mejorar la calidad de vida de comunidades vulnerables mediante programas sociales, educativos y de salud
        </p>

        <Link
          to="/nosotros"
          className="text-green-700 font-semibold hover:underline"
        >
          Leer más →
        </Link>
      </section>

      {/* IMPACTO */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-700">
          Nuestro Impacto
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card
            title="+500"
            description="Personas beneficiadas"
            icon={<Users size={40} />}
          />
          <Card
            title="+50"
            description="Proyectos realizados"
            icon={<HeartHandshake size={40} />}
          />
          <Card
            title="10+"
            description="Comunidades impactadas"
            icon={<Globe size={40} />}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Únete a nuestra causa
        </h2>

        <p className="mb-6 max-w-xl mx-auto">
          Juntos podemos transformar vidas y construir un mejor futuro
        </p>

        <Link
          to="/videos"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contáctanos
        </Link>
      </section>
    </>
  );
};

export default Home;