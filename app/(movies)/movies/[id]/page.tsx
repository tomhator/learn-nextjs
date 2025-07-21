import { Suspense } from "react";
import MovieInfos from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieProviders from "../../../../components/movie-providers";
import { API_URL } from "../../../constant";

async function getMovie(id: string){
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export async function generateMetadata({params: {id}}: {params: {id: string}}){
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}

export default async function MoviePage({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info</h1>}>
                <MovieInfos id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Porvider</h1>}>
                <MovieProviders id={id} />
            </Suspense>
        </div>
    );
}