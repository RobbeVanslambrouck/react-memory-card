import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/reset.css";
import "./styles/app.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
    </div>
  );
};

export default App;
