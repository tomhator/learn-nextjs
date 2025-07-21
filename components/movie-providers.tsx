import { API_URL } from '../app/constant';
import styles from '../styles/movie-providers.module.css'

async function getProviders(id: string){
    const response = await fetch(`${API_URL}/${id}/providers`)
    return response.json();
}

export default async function MovieProviders({id}: {id:string}){
    const providers = await getProviders(id);
    const caProviders = providers.CA;

    const hasBuy = caProviders?.buy?.length > 0;
    const hasRent = caProviders?.rent?.length > 0;
    const hasFlatrate = caProviders?.flatrate?.length > 0;

    if (!caProviders || (!hasBuy && !hasRent && !hasFlatrate)) {
        return null;
    }

    return (
        <div className={styles.providerWrap}>
            <h5>Providers</h5>
            <div className={styles.providerBox}>
                {hasBuy && (
                    <div className={styles.providerItem}>
                        <h6>Buy</h6>
                        <ul className={styles.provideList}>
                            {caProviders.buy.map(buyFrom =>
                                <li key={buyFrom.provider_id}>
                                    <img src={buyFrom.logo_path} alt={buyFrom.provider_name} />
                                    <span>{buyFrom.provider_name}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
                {hasRent && (
                    <div className={styles.providerItem}>
                        <h6>Rent</h6>
                        <ul className={styles.provideList}>
                            {caProviders.rent.map(rentFrom =>
                                <li key={rentFrom.provider_id}>
                                    <img src={rentFrom.logo_path} alt={rentFrom.provider_name} />
                                    <span>{rentFrom.provider_name}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
                {hasFlatrate && (
                    <div className={styles.providerItem}>
                        <h6>Flat Rate</h6>
                        <ul className={styles.provideList}>
                            {caProviders.flatrate.map(flatFrom =>
                                <li key={flatFrom.provider_id}>
                                    <img src={flatFrom.logo_path} alt={flatFrom.provider_name} />
                                    <span>{flatFrom.provider_name}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            
        </div>
    );
}