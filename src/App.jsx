import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop  from "./components/ScrollToTop";
import "./index.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      {/* CONTENIDO */}
      <main className="pt-20 pb-16 px-4 min-h-[calc(100vh-80px)]">
        <ScrollToTop />
        <AppRouter />
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;