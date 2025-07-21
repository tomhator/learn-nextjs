import { Suspense } from "react";
import MovieInfos from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MoviePage({
    params
}:{
    params: Promise<{id: string}>
}){
    // 15버전 이후로 바뀐 부분. param을 await로 바꿔줘야함. 위의 Promise 함꼐 참고
    const { id } = await params;

    return <div>
        <Suspense fallback={<h1>Loading Movie Info</h1>}>
            <MovieInfos id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Video</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}