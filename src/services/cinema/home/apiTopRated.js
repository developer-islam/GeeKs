// Get a list of movies and series ordered by rating.
export default async function getTopRated(type, page) {
 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdlM2YzYTk2YWQ4Y2FmZTI5MjVkYTU5NGYzZmJlNyIsIm5iZiI6MTczMDg2NjU0Ni44NjgsInN1YiI6IjY3MmFlZDcyNDI1YmRjZDJhY2UzNGJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FctoQmmRAfvyVwnuF9kbqHtVx7LCFw56ZQagrjtTlqQ",
  },
 };

// Get a list of movies or series ordered by rating.
 const contentData = await fetch(
  `https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=${page}`,
  options
 );
 const content = await contentData.json();

 return content.results
}

