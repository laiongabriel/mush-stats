import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import BridgeIcon from "../../assets/img/icons/bridge.png";
import { calculateRatio, formatNumber } from "../../functions.ts";

type BridgeProps = {
   data: DuelsStats | null;
};

function Bridge({ data }: BridgeProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img
                  src={BridgeIcon}
                  alt="Terracota azul"
                  style={{ position: "relative", top: "-2px" }}
               />
               <h2>The Bridge</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>Winstreak: {data?.bridge_winstreak || "-"}</p>
               <p>Maior winstreak: {data?.bridge_max_winstreak || "-"}</p>
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
                     <td>{formatNumber(data?.bridge_wins)}</td>
                     <td>{formatNumber(data?.bridge_losses)}</td>
                     <td>{formatNumber(data?.bridge_kills)}</td>
                     <td>{formatNumber(data?.bridge_deaths)}</td>
                     <td>
                        {calculateRatio(data?.bridge_wins, data?.bridge_losses)}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.bridge_kills,
                           data?.bridge_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>1v1</td>
                     <td>{formatNumber(data?.bridge_solo_wins)}</td>
                     <td>{formatNumber(data?.bridge_solo_losses)}</td>
                     <td>{formatNumber(data?.bridge_solo_kills)}</td>
                     <td>{formatNumber(data?.bridge_solo_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.bridge_solo_wins,
                           data?.bridge_solo_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.bridge_solo_kills,
                           data?.bridge_solo_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>2v2</td>
                     <td>{formatNumber(data?.bridge_doubles_wins)}</td>
                     <td>{formatNumber(data?.bridge_doubles_losses)}</td>
                     <td>{formatNumber(data?.bridge_doubles_kills)}</td>
                     <td>{formatNumber(data?.bridge_doubles_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.bridge_doubles_wins,
                           data?.bridge_doubles_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.bridge_doubles_kills,
                           data?.bridge_doubles_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>3v3</td>
                     <td>{formatNumber(data?.bridge_three_wins)}</td>
                     <td>{formatNumber(data?.bridge_three_losses)}</td>
                     <td>{formatNumber(data?.bridge_three_kills)}</td>
                     <td>{formatNumber(data?.bridge_three_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.bridge_three_wins,
                           data?.bridge_three_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.bridge_three_kills,
                           data?.bridge_three_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>4v4</td>
                     <td>{formatNumber(data?.bridge_four_wins)}</td>
                     <td>{formatNumber(data?.bridge_four_losses)}</td>
                     <td>{formatNumber(data?.bridge_four_kills)}</td>
                     <td>{formatNumber(data?.bridge_four_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.bridge_four_wins,
                           data?.bridge_four_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.bridge_four_kills,
                           data?.bridge_four_deaths
                        )}
                     </td>
                  </tr>
                  <tr>
                     <td>1v1v1v1</td>
                     <td>{formatNumber(data?.bridge_1v1v1v1_wins)}</td>
                     <td>{formatNumber(data?.bridge_1v1v1v1_losses)}</td>
                     <td>{formatNumber(data?.bridge_1v1v1v1_kills)}</td>
                     <td>{formatNumber(data?.bridge_1v1v1v1_deaths)}</td>
                     <td>
                        {calculateRatio(
                           data?.bridge_1v1v1v1_wins,
                           data?.bridge_1v1v1v1_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.bridge_1v1v1v1_kills,
                           data?.bridge_1v1v1v1_deaths
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Bridge;
