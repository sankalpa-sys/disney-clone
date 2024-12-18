import MoviesCarousel from "@/components/shared/MoviesCarousel";
import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from "@/actions/moviesActions";
import CarouselBannerWrapper from "@/components/shared/CarouselBannerWrapper";


export default async function Home() {
    const upcomingMovies = await getUpcomingMovies()
    const topRatedMovies = await getTopRatedMovies()
    const popularMovies = await getPopularMovies()
  return (
   <div>
       <CarouselBannerWrapper/>
    <MoviesCarousel title="Upcoming" movies={upcomingMovies}/>
    <MoviesCarousel title="Top rated" movies={topRatedMovies}/>
    <MoviesCarousel title="Popular" movies={popularMovies}/>
   </div>
  );
}
