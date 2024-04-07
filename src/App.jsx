import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { NavBar } from "./components/nav/NavBar";
import { InitialContent } from "./components/pages/initialpage/InitialContent";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <NavBar />
      <InitialContent />
      <Footer />
    </div>
  );
}

export default App;
