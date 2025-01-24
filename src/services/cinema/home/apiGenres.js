// Get the list of official genres for movies and series.
export default async function getGenres(type, id) {
 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdlM2YzYTk2YWQ4Y2FmZTI5MjVkYTU5NGYzZmJlNyIsIm5iZiI6MTczMDg2NjU0Ni44NjgsInN1YiI6IjY3MmFlZDcyNDI1YmRjZDJhY2UzNGJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FctoQmmRAfvyVwnuF9kbqHtVx7LCFw56ZQagrjtTlqQ",
  },
 };

 const moviesData = await fetch(
  `https://api.themoviedb.org/3/genre/movie/list?language=en`,
  options
 );
 const moviesGenres = await moviesData.json();

 const seriesData = await fetch(
  `https://api.themoviedb.org/3/genre/tv/list?language=en`,
  options
 );
 const seriesGenres = await seriesData.json();

 return [...moviesGenres.genres, ...seriesGenres.genres];
}
