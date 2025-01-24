// Get the trending movies, series and people.
export default async function getTrending() {
 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdlM2YzYTk2YWQ4Y2FmZTI5MjVkYTU5NGYzZmJlNyIsIm5iZiI6MTczMDg2NjU0Ni44NjgsInN1YiI6IjY3MmFlZDcyNDI1YmRjZDJhY2UzNGJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FctoQmmRAfvyVwnuF9kbqHtVx7LCFw56ZQagrjtTlqQ",
  },
 };

 const data = await fetch(
  `https://api.themoviedb.org/3/trending/all/week?language=en-US`,
  options
 );
 const content = await data.json();

 return content.results;
}
