// import { API_URL } from "../app/(home)/page";
import styles from '../styles/movie-providers.module.css'
// import Link from "next/link";

interface IProvider {
  link?: string;
  buy?: any[];
  rent?: any[];
  flatrate?: any[];
}

async function getProviders(id: string){
    const response = await fetch(`${process.env.API_URL}/${id}/providers`)
    return response.json();
}

export default async function MovieProviders({id}: {id:string}){
    const providers = await getProviders(id);
    const {link, ...provider} = {
        ...{link: [], buy: [], rent: [], flatrate: []},
        ...providers.CA,
    } as IProvider;

    console.log()

    return (
        <div className={styles.providerWrap}>
            <h5>Providers</h5>
            <div className={styles.providerBox}>
                <div className={styles.providerItem}>
                    <h6>Buy</h6>
                    {providers.CA.buy
                        ? <ul className={styles.provideList}>
                            {providers.CA.buy.map(buyFrom =>
                                <li>
                                    <img src={buyFrom.logo_path} alt={buyFrom.provider_name} />
                                    <span>{buyFrom.provider_name}</span>
                                </li>
                            )}
                        </ul>
                    : 'No Buy'}
                </div>
                <div className={styles.providerItem}>
                    <h6>Rent</h6>
                    {providers.CA.buy
                        ? <ul className={styles.provideList}>
                            {providers.CA.buy.map(rentFrom =>
                                <li>
                                    <img src={rentFrom.logo_path} alt={rentFrom.provider_name} />
                                    <span>{rentFrom.provider_name}</span>
                                </li>
                            )}
                        </ul>
                    : 'No Rent'}
                </div>
                <div className={styles.providerItem}>
                    <h6>Flat Rate</h6>
                    {providers.CA.buy
                        ? <ul className={styles.provideList}>
                            {providers.CA.buy.map(flatFrom =>
                                <li>
                                    <img src={flatFrom.logo_path} alt={flatFrom.provider_name} />
                                    <span>{flatFrom.provider_name}</span>
                                </li>
                            )}
                        </ul>
                    : 'No Flat Rate'}
                </div>
            </div>
            
        </div>
    );
}