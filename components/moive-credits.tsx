import { API_URL } from '../app/constant';
import styles from '../styles/moive-credits.module.css'

async function getCredit(id: string){
    const response = await fetch(`${API_URL}/${id}/credits`)
    return response.json();
}


export default async function MovieCredits({id}: {id: string}){
    const credits = await getCredit(id);
    return (
    <div className={styles.creditWrap}>
        <h5 className={styles.creditTitle}>Credits</h5>
        <ul className={styles.creditList}>
            {credits.map(credit => 
                <li key={credit.id} className="styles">
                    <p className={styles.char}>{credit.character}</p>
                    <p className={styles.actor}>{credit.name}</p>
                </li>
            )}
        </ul>
    </div>)
}