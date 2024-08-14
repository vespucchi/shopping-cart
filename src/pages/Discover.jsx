import HomeSlider from '../components/home/HomeSlider';
import HomeNewReleases from '../components/home/HomeNewReleases';
import HomeTrending from '../components/home/HomeTrending';
import HomeFreeGames from '../components/home/HomeFreeGames';
import HomeVerticalCategories from '../components/home/HomeVerticalCategories';
import PropTypes from 'prop-types';

export default function DiscoverPage({ games }) {
    return (
        <>
            <HomeSlider games={games} />
            <HomeNewReleases games={games} />
            <HomeTrending games={games} />
            <HomeFreeGames games={games} />
            <HomeVerticalCategories games={games} />
        </>
    )
}

DiscoverPage.propTypes = {
    games: PropTypes.array.isRequired,
};