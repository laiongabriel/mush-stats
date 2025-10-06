import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useFetch from "../hooks/useFetch";
import styles from "../styles/PlayerPage.module.scss";
import Header from "./Header";
import PlayerNotFound from "./Helper/PlayerNotFound";
import Bedwars from "./Minigames/Bedwars";
import Skywars from "./Minigames/Skywars";
import PlayerSummary from "./PlayerSummary";
import HungerGames from "./Minigames/HungerGames";
import PvP from "./Minigames/PvP";
import Bedfight from "./Minigames/Bedfight";
import Boxing from "./Minigames/Boxing";
import Bridge from "./Minigames/Bridge";
import Gladiator from "./Minigames/Gladiator";
import Soup from "./Minigames/Soup";

function PlayerPage() {
  const { playerName } = useParams();
  const { data, loading, error } = useFetch<PlayerData>(
    `https://mush.com.br/api/player/${playerName}`
  );

  if (loading) {
    document.title = "Carregando... | Mush Stats";
    return (
      <div className="loadingContainer">
        <Header />
        <div className="loading"></div>
        <p>Carregando estatísticas de {playerName}...</p>
      </div>
    );
  }
  if (error) return <p>Erro: {error}</p>;
  if (data?.success === false) return <PlayerNotFound />;
  if (!data) return null;
  return (
    <HelmetProvider>
      <Helmet>
        <title>{data.response.account.username} | Mush Stats</title>
        <link
          rel="shortcut icon"
          href={`https://visage.surgeplay.com/face/16/${
            data.response.skin?.hash || data.response.account.username
          }`}
          type="image/x-icon"
        />
      </Helmet>

      <Header />
      <div className={styles.playerPageContainer}>
        <section className={`${styles.playerSummaryContainer} animeLeft`}>
          <PlayerSummary data={data} />
        </section>

        <section className={`${styles.statsContainer} animeLeft`}>
          <Bedwars data={data.response.stats.bedwars} />
          <Skywars data={data.response.stats.skywars_r1} />
          <HungerGames data={data.response.stats.hungergames} />
          <PvP data={data.response.stats.pvp} />

          <h1>Duels</h1>
          <Bedfight data={data.response.stats.duels} />
          <Boxing data={data.response.stats.duels} />
          <Bridge data={data.response.stats.duels} />
          <Gladiator data={data.response.stats.duels} />
          <Soup data={data.response.stats.duels} />
        </section>
      </div>
    </HelmetProvider>
  );
}

export default PlayerPage;
