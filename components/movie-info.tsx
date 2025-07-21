import { Suspense } from "react";
import styles from "../styles/movie-info.module.css"
import MovieCredits from "./moive-credits";
import { API_URL } from "../app/constant";

export async function getMovie(id: string){
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfos({id}: {id: string}){
    const movie = await getMovie(id);
    return <div className={styles.movieInfo}>
        <div className={styles.image}><img src={movie.poster_path} alt={movie.title} /></div>
        <div className={styles.info}>
            <h1>{movie.title}</h1>
            <h3>⭐{movie.vote_average}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            <Suspense fallback={<h1>Loading Movie Credit</h1>}>
                <MovieCredits id={id}/>
            </Suspense>
        </div>
    </div>
}