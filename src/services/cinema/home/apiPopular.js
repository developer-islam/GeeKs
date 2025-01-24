// API functions.
import {useState} from "react"
import getVideos from "./apiVideos"

// Get a list of movies and series ordered by popularity.
export default async function getPopular() {
 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdlM2YzYTk2YWQ4Y2FmZTI5MjVkYTU5NGYzZmJlNyIsIm5iZiI6MTczMDg2NjU0Ni44NjgsInN1YiI6IjY3MmFlZDcyNDI1YmRjZDJhY2UzNGJhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FctoQmmRAfvyVwnuF9kbqHtVx7LCFw56ZQagrjtTlqQ",
  },
 };

 const data = await fetch(
  `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
  options
 );
 const content = await data.json();
 // Get a videos of movies.

 const full  = []


// content.results.map(async function(item, i) {

//   const key = [...await getVideos("movie", item.id).then(data => data)].filter(video => video.site === "YouTube" && video.type === "Trailer" && video.official === true).map(item => item.key).slice(0,1)

//  full.push({...item, trailer: key})

//  })

for (let i = 0; i < content.results.length; i++) {
 // console.log(content.results[i])

 const key = [await getVideos("movie", content.results[i].id)].filter(video => video.site === "YouTube" && video.type === "Trailer" && video.official === true)

 console.log(key)

 full.push({...content.results[i]})
}

console.log(full)


 return full
}
