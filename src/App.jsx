import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      {/* CONTENIDO */}
      <main className="pt-20 pb-16 px-4">
        <AppRouter />
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;