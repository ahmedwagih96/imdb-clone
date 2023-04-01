export enum Routes {
  Home = "/",
  About = "/about",
}

export enum Pages {
  Home = "HOME",
  About = "ABOUT",
}

export enum Themes {
  Dark = "dark",
  Light = "light",
}

export enum NavbarItemsTitle {
  Trending = "Trending",
  TopRated = "Top Rated",
}
export enum Fetch {
  Trending = "fetchTrending",
  TopRated = "fetchTopRated",
}

export type Result = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}