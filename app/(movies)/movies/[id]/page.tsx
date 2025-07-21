import { Suspense } from "react";
// import { API_URL } from "../../../(home)/page";
import MovieInfos from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieProviders from "../../../../components/movie-providers";

interface IParams{
    params: {id: Promise<string>};
}

async function getMovie(id: string){
    const response = await fetch(`${process.env.API_URL}/${id}`);
    return response.json();
}

export async function generateMetadata({params: {id}}: IParams){
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}

export default async function MoviePage({
    params
}:IParams){
    // 15버전 이후로 바뀐 부분. param을 await로 바꿔줘야함. 위의 Promise 함꼐 참고
    const { id } = await params;

    return <div>
        <Suspense fallback={<h1>Loading Movie Info</h1>}>
            <MovieInfos id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Video</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Porvider</h1>}>
            <MovieProviders id={id}/>
        </Suspense>
    </div>
}