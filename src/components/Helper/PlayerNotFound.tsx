import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../Header";
import styles from "../../styles/PlayerNotFound.module.scss";

function PlayerNotFound() {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Jogador não encontrado | Mush Stats</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
         </Helmet>
         <Header />
         <div className={`${styles.playerNotFoundContainer} animeLeft`}>
            <h1>Jogador não encontrado.</h1>
         </div>
      </HelmetProvider>
   );
}

export default PlayerNotFound;
