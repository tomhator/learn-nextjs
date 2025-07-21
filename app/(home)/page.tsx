import Link from "next/link";

export const metadata ={
    title: "Home",
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovie(){
    // await new Promise((resolve) => setTimeout(resolve, 1500))
    const respose = await fetch(API_URL);
    const json = await respose.json();

    return json;
}

export default async function HomePage(){
    const movies = await getMovie();
    return <ul className="movie-list">{movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{`${movie.title}`}</Link></li>)}</ul>
}