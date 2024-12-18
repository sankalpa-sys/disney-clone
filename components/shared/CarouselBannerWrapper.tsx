import {getDiscoverMovies} from "@/actions/moviesActions";
import CarouselBanner from "@/components/shared/CarouselBanner";

type Props = {
    id?: string;
    keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
    const movies = await getDiscoverMovies(id, keywords);

    return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;