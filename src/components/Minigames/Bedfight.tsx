import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import BedIcon from "../../assets/img/icons/bed.png";
import { calculateRatio, formatNumber } from "../../functions.ts";

type BedfightProps = {
   data: DuelsStats;
};

function Bedfight({ data }: BedfightProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img
                  src={BedIcon}
                  alt="Cama"
                  style={{ position: "relative", top: "-2px" }}
               />
               <h2>Bedfight</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>Winstreak: {data.bed_fight_winstreak || "-"}</p>
               <p>Maior winstreak: {data.bed_fight_max_winstreak || "-"}</p>
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
                     <th>Camas quebradas</th>
                     <th>WLR</th>
                     <th>KDR</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Total</td>
                     <td>{formatNumber(data.bed_fight_wins)}</td>
                     <td>{formatNumber(data.bed_fight_losses)}</td>
                     <td>{formatNumber(data.bed_fight_kills)}</td>
                     <td>{formatNumber(data.bed_fight_deaths)}</td>
                     <td>{formatNumber(data.bed_fight_beds_broken)}</td>
                     <td>
                        {calculateRatio(
                           data.bed_fight_wins,
                           data.bed_fight_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.bed_fight_kills,
                           data.bed_fight_deaths
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>1v1</td>
                     <td>{formatNumber(data.bed_fight_solo_wins)}</td>
                     <td>{formatNumber(data.bed_fight_solo_losses)}</td>
                     <td>{formatNumber(data.bed_fight_solo_kills)}</td>
                     <td>{formatNumber(data.bed_fight_solo_deaths)}</td>
                     <td>{formatNumber(data.bed_fight_solo_beds_broken)}</td>
                     <td>
                        {calculateRatio(
                           data.bed_fight_solo_wins,
                           data.bed_fight_solo_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.bed_fight_solo_kills,
                           data.bed_fight_solo_deaths
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>2v2</td>
                     <td>{formatNumber(data.bed_fight_doubles_wins)}</td>
                     <td>{formatNumber(data.bed_fight_doubles_losses)}</td>
                     <td>{formatNumber(data.bed_fight_doubles_kills)}</td>
                     <td>{formatNumber(data.bed_fight_doubles_deaths)}</td>
                     <td>{formatNumber(data.bed_fight_doubles_beds_broken)}</td>
                     <td>
                        {calculateRatio(
                           data.bed_fight_doubles_wins,
                           data.bed_fight_doubles_losses
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.bed_fight_doubles_kills,
                           data.bed_fight_doubles_deaths
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Bedfight;
