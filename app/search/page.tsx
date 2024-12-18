import React from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {notFound} from "next/navigation";
import {getPopularMovies, getSearchedMovies} from "@/actions/moviesActions";
import MoviesCarousel from "@/components/shared/MoviesCarousel";

async function Page({searchParams}: SearchParams) {
    const params = await searchParams
    const query = params.query
    const decodedQuery = decodeURI(query)

    if(!query) {
        return notFound()
    }

    const searchedMovies = await getSearchedMovies(decodedQuery)
    const popularMovies = await getPopularMovies()
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">Results for {query}</h1>
                {/*<AISuggestion term={termToUse} />*/}

                <MoviesCarousel title="Movies" movies={searchedMovies} isVertical />

                <MoviesCarousel title="You may also like" movies={popularMovies} />
            </div>
        </div>
    );
}

export default Page;