import { Cine } from "../components/Cine/Cine";

import { Footer } from "../components/Footer/Footer";
import { Cartillas } from "../components/Cartillas/Cartillas";
import { Eventos } from "../components/Eventos/Eventos";

function Home() {
    return (
        <div>
            
            
            <Cartillas />
            <Eventos />
            <Cine />
            <Footer />
        </div>
    );
}

export default Home;