import { Cine } from "../components/Cine/Cine";
import { Restaurantes } from "../components/Restaurantes/Restaurantes";
import { Footer } from "../components/Footer/Footer";
import { Cartillas } from "../components/Cartillas/Cartillas";
import { Show_infantiles } from "../components/show_infantiles/Show_infantiles";
import { Conciertos } from "../components/Conciertos/Conciertos";
import { Cards } from "../components/CardArtistas/Cards";

function Home() {
  return (
    <div>
      <Cartillas />
      <Cards />
      <Conciertos />
      <Restaurantes />
      <Show_infantiles />
      <Cine />
      <Footer />
    </div>
  );
}

export default Home;
