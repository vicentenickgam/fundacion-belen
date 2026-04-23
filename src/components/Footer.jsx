import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* ESPACIADOR */}
      <div className="h-32 md:h-28"></div>

      {/* FOOTER FIJO */}
      <footer className="bg-green-900 text-white text-center p-6 fixed bottom-0 left-0 w-full z-50">

        <p className="font-semibold">© 2026 Fundación Belén</p>

        <p className="text-sm text-gray-300 mb-3">
          Comprometidos con el desarrollo social
        </p>

        <div className="flex justify-center gap-6 mt-2 text-xl">
          <a
            href="https://www.facebook.com/share/1DJqsFqsmB/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/fundacion_belen2952?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

      </footer>
    </>
  );
};

export default Footer;