import { API_URL } from "../app/(home)/page";

async function getMovie(id: string){
    const response = await fetch(`${API_URL}/${id}`);
    throw new Error('Something is odd');
    return response.json();
}

export default async function MovieInfos({id}: {id: string}){
    const movies = await getMovie(id);
    return <h6>{JSON.stringify(movies)}</h6>
}