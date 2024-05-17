import { Helmet, HelmetProvider } from "react-helmet-async";
import styles from "../styles/Home.module.scss";

function Home() {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Mush Stats</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
         </Helmet>
         <div className={styles.homeContainer}>
            <h1>Home</h1>
            <p>Em desenvolvimento</p>
         </div>
      </HelmetProvider>
   );
}

export default Home;
