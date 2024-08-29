import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import BoxingIcon from "../../assets/img/icons/boxing.png";
import { calculateRatio, formatNumber } from "../../functions.ts";

type BoxingProps = {
   data: DuelsStats | null;
};

function Boxing({ data }: BoxingProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img
                  src={BoxingIcon}
                  alt="Espada de diamante"
                  style={{ position: "relative", top: "-2px" }}
               />
               <h2>Boxing</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>Winstreak: {data?.boxing_winstreak || "-"}</p>
               <p>Maior winstreak: {data?.boxing_max_winstreak || "-"}</p>
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
                     <td>{formatNumber(data?.boxing_wins)}</td>
                     <td>{formatNumber(data?.boxing_losses)}</td>
                     <td>{formatNumber(data?.boxing_kills)}</td>
                     <td>{formatNumber(data?.boxing_deaths)}</td>
                     <td>
                        {calculateRatio(data?.boxing_wins, data?.boxing_losses)}
                     </td>
                     <td>
                        {calculateRatio(
                           data?.boxing_kills,
                           data?.boxing_deaths
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Boxing;
