import Link from "next/link";
import styles from '../../styles/home.module.css'
import Movie from "../../components/movie";
import { API_URL } from "../constant";

export const metadata ={
    title: "Home",
}



async function getMovie(){
    // await new Promise((resolve) => setTimeout(resolve, 1500))
    const respose = await fetch(API_URL);
    const json = await respose.json();

    return json;
}

export default async function HomePage(){
    const movies = await getMovie();
    return (
        <div className={styles.movieWrap}>
            {movies.map((movie) => (
                <Movie 
                key={movie.id} 
                id={movie.id} 
                poster_path={movie.poster_path} 
                title={movie.title} 
                />
            ))}
        </div>
    )
}