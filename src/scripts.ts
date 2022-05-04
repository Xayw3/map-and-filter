type RatingDetail = {
    rating: number,
    count: number
};

type Episode = {
    id: number,
    title: string,
    season: number,
    episode: number,
    released: string
};

type Show = {
    id: number,
    title: string,
    description: string,
    year: number,
    isPopular: boolean,
    available: boolean,
    ratingDetails: RatingDetail,
    genres: string[],
    episodes: Episode[]
};

const shows: Show[] = [
    {
        id: 1,
        title: 'Arrow',
        description: 'It is based on the DC Comics character Green Arrow, a costumed crime-fighter',
        year: 2012,
        isPopular: false,
        available: false,
        ratingDetails: {
            rating: 8.1137,
            count: 642,
        },
        genres: ['Drama', 'Action', 'Science-Fiction'],
        episodes: [
            {
                id: 1,
                title: 'Pilot',
                season: 1,
                episode: 1,
                released: '2012-10-11 00:00:00',
            },
            {
                id: 24,
                title: 'City of Heroes',
                season: 2,
                episode: 1,
                released: '2012-10-11 00:00:00',
            },
        ],
    },
    {
        id: 2,
        title: 'Bouncers',
        description: 'Series following the brave people who keep the peace at night.',
        year: 2019,
        isPopular: true,
        available: false,
        ratingDetails: {
            rating: 6.532,
            count: 583,
        },
        genres: ['Lifestyle', 'Drama'],
        episodes: [
            {
                id: 1,
                title: 'Episode 5',
                season: 1,
                episode: 5,
                released: '2019-08-28 23:00:00',
            },
            {
                id: 6,
                title: 'Episode 6',
                season: 1,
                episode: 6,
                released: '2019-08-28 23:00:00',
            },
        ],
    },
    {
        id: 3,
        title: 'Supernatural',
        description: 'Two brothers follow their father\'s footsteps as hunters, fighting evil supernatural beings',
        year: 2005,
        isPopular: true,
        available: false,
        ratingDetails: {
            rating: 9.995,
            count: 50,
        },
        genres: ['Fantasy', 'Drama'],
        episodes: [
            {
                id: 2,
                title: 'Wendigo',
                season: 1,
                episode: 2,
                released: '2005-09-20 23:00:00',
            },
        ],
    },
];

// Map

// Get an array of all titles
const getTitles = shows.map((el) => el.title);

console.log(getTitles);

// Get an array of ids
const getIds = shows.map((el) => el.id);

console.log(getIds);

// Get an array of ratings
const getRatings = shows.map((el) => el.ratingDetails.rating);

console.log(getRatings);

// Get an array of ratings rounded to 2 decimal places
const getRoundetRating = shows.map((el) => el.ratingDetails.rating.toFixed(2));

console.log(getRoundetRating);

// Capitalise all genres
const capitaliseGenres = shows.map((el) => el.genres.map((genre) => genre.toUpperCase()));

console.log(capitaliseGenres);

// Double all ratingDetails.count
const doubleRatingCount = shows.map((el) => el.ratingDetails.count * 2);

console.log(doubleRatingCount);

// Round all ratings to 2 decimal places
const decimalRating = shows.map((el) => (
    { ...el, ratingDetails: { ...el.ratingDetails, rating: el.ratingDetails.rating.toFixed(2) } }));

console.log(decimalRating);

// map() each object to only have id, title, description - šo es piemirsu, bet te vnk skip spread

const skipParams = shows.map((el) => ({ id: el.id, title: el.title, description: el.description }));

console.log(skipParams);

// If id === 1, change rating to 9.9999
const changeRatingIdOne = shows.map((el) => (el.id === 1
    ? { ...el, ratingDetails: { ...el.ratingDetails, rating: 9.9999 } }
    : el));

console.log(changeRatingIdOne);

// If id === 2, change rating to 8 and add + 1 to rating count
const changeRatingIdTwo = shows.map((el) => (el.id === 2
    ? {
        ...el,
        ratingDetails: { ...el.ratingDetails, rating: 8 }
    && { ...el.ratingDetails, count: el.ratingDetails.count + 1 },
    }
    : el));

console.log(changeRatingIdTwo);

// If rating > 7, change isPopular value to true
const ratingBiggerSecen = shows.map((el) => (el.ratingDetails.rating > 7
    ? { ...el, isPopular: true }
    : { ...el, isPopular: false }));

console.log(ratingBiggerSecen);

// If isPopular === true, change rating to 10
const ifIsPopular = shows.map((el) => (el.isPopular === true
    ? { ...el, ratingDetails: { ...el.ratingDetails, rating: 10 } }
    : el));

console.log(ifIsPopular);

// If genres include 'Science-Fiction', change available to true
const ifIsScienceFiction = shows.map((el) => (el.genres.includes('Science-Fiction') ? { ...el, available: true } : el));

console.log(ifIsScienceFiction);

// eslint-disable-next-line max-len
// If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []
const ifIsPopularEpisode = shows.map((el) => (el.isPopular === true
    ? { ...el.episodes.map((episode) => episode.id) }
    : { ...el, episodes: el.episodes.slice(el.episodes.length) }));

console.log(ifIsPopularEpisode);

// Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])
const getGenres = shows.flatMap((el) => el.genres);

console.log(getGenres);

// If year > 2016 and isPopular === true, add 'Documentary' to genres
const newGenre = ['Documentary'];
const addDocumentary = shows.map((el) => ((el.year > 2016 && el.isPopular === true)
    ? { ...el.genres, ...newGenre }
    : el));

console.log(addDocumentary);

// If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'
const changeReleaseDate = shows.map((el) => (
    el.id === 1 ? el.episodes.map((episode) => (episode.id === 24 ? { ...episode, released: '2022-10-12 00:00:00' } : episode)) : el));

console.log(changeReleaseDate);

// Filter

// Get all shows, where rating < 7
const getShowsRatingMoreSeven = shows.filter((el) => el.ratingDetails.rating < 7);

console.log(getShowsRatingMoreSeven);

// Get all shows, where description includes "DC"
const descIncludeDc = shows.filter((el) => el.description.includes('DC'));

console.log(descIncludeDc);

// Get all shows, where isPopular === true
const popularShows = shows.filter((el) => el.isPopular === true);

console.log(popularShows);

// Get all shows, where genres include Drama
const dramaShows = shows.filter((el) => el.genres.includes('Drama'));

console.log(dramaShows);

// Get all shows, where episode array length >= 2
const moreEpisodes = shows.filter((el) => el.episodes.length >= 2);

console.log(moreEpisodes);

// Get all shows, where episode title is Wendigo
const showWithWendigo = shows.filter((el) => el.episodes.find((title) => title.title.includes('Wendigo')));

console.log(showWithWendigo);

// Get all shows, where year is < 2019
const oldShows = shows.filter((el) => el.year < 2019);

console.log(oldShows);

// Get all shows, where title starts with Sup
const startWithSup = shows.filter((el) => el.title.startsWith('Sup'));

console.log(startWithSup);

// Get all shows, where id === 2
const showWithIdTwo = shows.filter((el) => el.id === 2);

console.log(showWithIdTwo);

// Get all shows, where id !== 2
const showsIdNotTwo = shows.filter((el) => el.id !== 2);

console.log(showsIdNotTwo);

// Get all episodes, where genres include "Drama" and rating > 7
const dramaEpisodesWithRating = shows.filter((el) => el.genres.includes('Drama') && el.ratingDetails.rating > 7);

console.log(dramaEpisodesWithRating);
