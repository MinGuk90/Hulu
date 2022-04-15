const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api+key=${API_KEY}&language=enUS`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api+key=${API_KEY}&language=enUS`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movies",
    url: `/discover/movie?api+key=${API_KEY}&with_genres=10770`,
  },
};
