import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import GladiatorIcon from "../../assets/img/icons/gladiator.png";
import { calculateRatio, formatNumber } from "../../functions.ts";

type GladiatorProps = {
   data: DuelsStats | null;
};

function Gladiator({ data }: GladiatorProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img
                  src={GladiatorIcon}
                  alt="Barras de ferro"
                  style={{ position: "relative", top: "-2px" }}
               />
               <h2>Gladiator</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>Winstreak: {data?.gladiator_winstreak || "-"}</p>
               <p>Maior winstreak: {data?.gladiator_max_winstreak || "-"}</p>
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
                     <td>{formatNumber(data?.gladiator_wins)}</td>
                     <td>{formatNumber(data?.gladiator_losses)}</td>
                     <td>{formatNumber(data?.gladiator_kills)}</td>
                     <td>{formatNumber(data?.gladiator_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_wins,
                           data?.gladiator_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_kills,
                           data?.gladiator_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>1v1</td>
                     <td>{formatNumber(data?.gladiator_solo_wins)}</td>
                     <td>{formatNumber(data?.gladiator_solo_losses)}</td>
                     <td>{formatNumber(data?.gladiator_solo_kills)}</td>
                     <td>{formatNumber(data?.gladiator_solo_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_solo_wins,
                           data?.gladiator_solo_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_solo_kills,
                           data?.gladiator_solo_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>2v2</td>
                     <td>{formatNumber(data?.gladiator_doubles_wins)}</td>
                     <td>{formatNumber(data?.gladiator_doubles_losses)}</td>
                     <td>{formatNumber(data?.gladiator_doubles_kills)}</td>
                     <td>{formatNumber(data?.gladiator_doubles_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_doubles_wins,
                           data?.gladiator_doubles_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_doubles_kills,
                           data?.gladiator_doubles_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>HG 1V1</td>
                     <td>{formatNumber(data?.gladiator_hg_solo_wins)}</td>
                     <td>{formatNumber(data?.gladiator_hg_solo_losses)}</td>
                     <td>{formatNumber(data?.gladiator_hg_solo_kills)}</td>
                     <td>{formatNumber(data?.gladiator_hg_solo_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_hg_solo_wins,
                           data?.gladiator_hg_solo_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_hg_solo_kills,
                           data?.gladiator_hg_solo_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>HG 2V2</td>
                     <td>{formatNumber(data?.gladiator_hg_doubles_wins)}</td>
                     <td>{formatNumber(data?.gladiator_hg_doubles_losses)}</td>
                     <td>{formatNumber(data?.gladiator_hg_doubles_kills)}</td>
                     <td>{formatNumber(data?.gladiator_hg_doubles_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_hg_doubles_wins,
                           data?.gladiator_hg_doubles_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.gladiator_hg_doubles_kills,
                           data?.gladiator_hg_doubles_deaths
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Gladiator;
