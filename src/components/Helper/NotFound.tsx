import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../Header";

function NotFound() {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Página não encontrada | Mush Stats</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
         </Helmet>
         <Header />
         <div>
            <h1>
               Página não encontrada. Verifique o endereço e tente novamente.
            </h1>
         </div>
      </HelmetProvider>
   );
}

export default NotFound;
