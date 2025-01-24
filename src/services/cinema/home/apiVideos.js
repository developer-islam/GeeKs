// Get Trailers of a movie and series by ID.
export default async function getVideos(type, id) {
 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdlM2YzYTk2YWQ4Y2FmZTI5MjVkYTU5NGYzZmJlNyIsIm5iZiI6MTczMDg2NjU0Ni44NjgsInN1YiI6IjY3MmFlZDcyNDI1YmRjZDJhY2UzNGJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FctoQmmRAfvyVwnuF9kbqHtVx7LCFw56ZQagrjtTlqQ",
  },
 };

 const data = await fetch(
  `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
  options
 );
 const content = await data.json();

 return content.results
;
}
