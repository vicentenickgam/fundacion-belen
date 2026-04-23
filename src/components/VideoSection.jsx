import { useState, useEffect } from "react";

const VideoSection = ({ folder }) => {
  const posiblesVideos = Array.from(
    { length: 15 },
    (_, i) => `/videos/${folder}/video${i + 1}.mp4`
  );

  const [videosValidos, setVideosValidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoActivo, setVideoActivo] = useState(null);

  const descripciones = {
  salud: [
    "Jornada médica en comunidad rural",
    "Atención en salud preventiva",
  ],
  educacion: [
    "Entrega de kits escolares",
    "Capacitación educativa",
  ],
};

  useEffect(() => {
    setVideosValidos([]);
    setLoading(true);

    let cargados = [];

    posiblesVideos.forEach((video) => {
      const vid = document.createElement("video");
      vid.src = video;

      vid.onloadeddata = () => {
        cargados.push(video);
        setVideosValidos([...cargados]);
        setLoading(false);
      };

      vid.onerror = () => {};
    });
  }, [folder]);


  return (
    <div className="max-w-6xl mx-auto">

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500 mb-6">
          Cargando videos...
        </p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
          {videosValidos.map((video, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">

              <div
                onClick={() => setVideoActivo(video)}
                className="cursor-pointer bg-black flex items-center justify-center h-64"
              >
                <video
                  src={video}
                  className="max-h-full max-w-full object-contain"
                  muted
                />
              </div>

              {/* DESCRIPCIÓN */}
              <div className="p-3 text-sm text-gray-600 text-center">
                {descripciones[folder]?.[index] || "Video institucional"}
              </div>

            </div>
          ))}
      </div>

      {/* SIN VIDEOS */}
      {!loading && videosValidos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No hay videos disponibles en esta categoría
        </p>
      )}

      {/* 🎬 MODAL */}
      {videoActivo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

          {/* CONTENEDOR */}
          <div className="relative w-full max-w-4xl px-4">

            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setVideoActivo(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
            >
              ✕
            </button>

            {/* VIDEO GRANDE */}
            <div className="bg-black rounded-xl overflow-hidden flex items-center justify-center">
              <video
                src={videoActivo}
                controls
                autoPlay
                className="max-h-[80vh] max-w-full object-contain"
              />
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default VideoSection;