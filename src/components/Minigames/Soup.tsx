import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import SoupIcon from "../../assets/img/icons/hg.png";
import { calculateRatio, formatNumber } from "../../functions.ts";

type SoupProps = {
   data: DuelsStats | null;
};

function Soup({ data }: SoupProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img
                  src={SoupIcon}
                  alt="Barras de ferro"
                  style={{ position: "relative", top: "-2px" }}
               />
               <h2>Sopa</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>Winstreak: {data?.soup_winstreak || "-"}</p>
               <p>Maior winstreak: {data?.soup_max_winstreak || "-"}</p>
            </div>

            <button className={styles.accordionItemButton}>
               <img src={DownIcon} alt="Abrir e fechar" />
            </button>
         </div>

         <div ref={accordionPanel} className={styles.panel}>
            <table>
               <thead>
                  <tr>
                     <th>Modo</th>
                     <th>Vitórias</th>
                     <th>Derrotas</th>
                     <th>Abates</th>
                     <th>Mortes</th>
                     <th>WLR</th>
                     <th>KDR</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Total</td>
                     <td>{formatNumber(data?.soup_wins)}</td>
                     <td>{formatNumber(data?.soup_losses)}</td>
                     <td>{formatNumber(data?.soup_kills)}</td>
                     <td>{formatNumber(data?.soup_deaths)}</td>
                     <td>
                        {calculateRatio(data?.soup_wins, data?.soup_losses)}
                     </td>
                     <td>
                        {calculateRatio(data?.soup_kills, data?.soup_deaths)}
                     </td>
                  </tr>
                  <tr>
                     <td>1v1</td>
                     <td>{formatNumber(data?.soup_solo_wins)}</td>
                     <td>{formatNumber(data?.soup_solo_losses)}</td>
                     <td>{formatNumber(data?.soup_solo_kills)}</td>
                     <td>{formatNumber(data?.soup_solo_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.soup_solo_wins,
                           data?.soup_solo_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.soup_solo_kills,
                           data?.soup_solo_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>2v2</td>
                     <td>{formatNumber(data?.soup_doubles_wins)}</td>
                     <td>{formatNumber(data?.soup_doubles_losses)}</td>
                     <td>{formatNumber(data?.soup_doubles_kills)}</td>
                     <td>{formatNumber(data?.soup_doubles_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.soup_doubles_wins,
                           data?.soup_doubles_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.soup_doubles_kills,
                           data?.soup_doubles_deaths
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Soup;
