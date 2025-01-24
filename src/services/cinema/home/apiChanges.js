// API functions.
import getTopRated from "./apiTopRated"

// Get a list of movies and series.
export default async function getChanges() {
// Get random page.
 let page = Math.floor(Math.random() * 12) + 1
	// Get a list of movies.
 const movies = await getTopRated("movie", page).then(data => data)
	// Get a list of series.
 const series = await getTopRated("tv", page).then(data => data)
 // List of movies and series.
 return [...movies.slice(0, 4), ...series.slice(0, 4)]
}
