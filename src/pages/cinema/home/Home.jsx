// Libraries.
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

// Sections.
import Hero from "../../../features/cinema/home/sections/Hero";
import Trending from "../../../features/cinema/home/sections/Trending";
import Trailers from "../../../features/cinema/home/sections/Trailers";
// import Popular from "../../../features/cinema/home/Popular";
// import Picks from "../../../features/cinema/home/Picks";

// Styles.

export default function Home() {
 return (
  <section>
   <Hero />

   <Trending />

   <Trailers />

   {/*<Popular />*/}

   {/*<Picks />*/}

   {/*<!------------------- Details. ------------------->*/}
   {/*   <section className="details">
    <div className="hero">
     <div className="hero-txt">
      <a href="#" className="title">
       <img className="title-img" src="https://image.tmdb.org/t/p/w500/4GKqOzFXX8UXqmF5XzEO7AQlNqY.png" alt="Title" />
      </a>

      <div className="info">
       <span className="release">2013</span>
       <span className="dot">&nbsp;</span>
       <span className="badge">PG-13</span>
       <span className="dot">&nbsp;</span>
       <span className="lang">en</span>
       <span className="dot">&nbsp;</span>
       <span className="number">89 Episodes</span>
      </div>

      <ul className="genres">
       <li className="genre">Action & Adventure</li>
       <li className="genre">Drama</li>
       <li className="genre">War & Politics</li>
      </ul>

      <p className="tag-line">London's for the taking.</p>

      <p className="overview">
       The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.
      </p>

      <div className="btns">
       <button className="btn">
        <span className="txt">Trailer</span>
        <i className="fa-solid fa-play"></i>
       </button>
       <button className="btn">
        <i className="fa-regular fa-bookmark"></i>
       </button>
      </div>
     </div>

     <div className="poster">
      <div className="poster-info">
       <img className="poster-img" src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" alt="Poster image" />

       <div className="poster-txt">
        <h4 className="title">Vikings</h4>
        <p className="creator">
         <a href="#" className="name">Michael Hirst</a>
         Creator
        </p>
        <p className="info">
         <span className="rating">81%</span>
         <span className="dot"></span>
         <span className="revies">(10.1K)</span>
        </p>
       </div>

       <div className="btns">
        <button className="btn">
         <i className="fa-solid fa-download"></i>
         <span>Download</span>
        </button>

        <button className="btn">
         <i className="fa-solid fa-language"></i>
         <span>Available subtitles</span>
        </button>
       </div>
      </div>

      <div className="watch-providers">
       <h3 className="heading">Watch or buy now on</h3>

       <ul className="providers">
        <li>
         <img className="provider-img" src="https://media.themoviedb.org/t/p/original/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg" alt="Netflex" />
        </li>
       </ul>
      </div>

      <div className="watch-networks">
       <h3 className="heading">Networks</h3>

       <ul className="networks">
        <li>
         <img className="network-img" src="https://media.themoviedb.org/t/p/h30/uJjcCg3O4DMEjM0xtno9OWFciRP.png" alt="Networks" />
        </li>
        <li>
         <img className="network-img" src="https://media.themoviedb.org/t/p/h30/7HVPn1p2w1nC5oRKBehXVHpss7e.png" alt="Networks" />
        </li>
       </ul>
      </div>

      <div className="watch-socials">
       <h3 className="heading">Socials</h3>

       <ul className="socials">
        <li>
         <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
         <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
         <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
         <i className="fa-solid fa-link"></i>
        </li>
       </ul>
      </div>

      <div className="watch-info">
       <ul className="info">
        <li>
         <span>Status</span>
         <span>Ended</span>
        </li>
        <li>
         <span>Type</span>
         <span>Scripted</span>
        </li>
        <li>
         <span>Original Language</span>
         <span>English</span>
        </li>
       </ul>
      </div>
     </div>
    </div>

    <section className="favorite">
     <h2 className="heading">More picks for your favorite interests</h2>

     <div className="favorite-container">
      <h3 className="heading-container">Top Rated Movies</h3>
      <ul className="favorite-list">
       <li>
        <a href="#" className="favorite-link">
         <img className="favorite-img" src="https://image.tmdb.org/t/p/w342/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" alt="Favorite image" />
        </a>
       </li>
      </ul>
     </div>
     <div className="favorite-container">
      <h3 className="heading-container">Top Rated Series</h3>
      <ul className="favorite-list">
       <li>
        <a href="#" className="favorite-link">
         <img className="favorite-img" src="https://image.tmdb.org/t/p/w342/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg" alt="Favorite image" />
        </a>
       </li>
      </ul>
     </div>
     <div className="favorite-container">
      <h3 className="heading-container">Popular People</h3>
      <ul className="favorite-list">
       <li>
        <a href="#" className="favorite-link">
         <img className="favorite-img" src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ycZpLjHxsNPvsB6ndu2D9qsx94X.jpg" alt="Favorite image" />
        </a>
       </li>
      </ul>
     </div>
    </section>
   </section>*/}
  </section>
 );
}
