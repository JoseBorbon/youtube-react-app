import React, { useState } from "react";
// import Nav from "./common/Nav";
import SearchBar from "./common/SearchBar";
import Routings from "./Routings";
import Footer from "./common/Footer";
import Navigation from "./common/Navigation";
import MobileNavigation from "./common/MobileNavigation";

const YoutubeApp = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getSearch = () => {
    if (!searchTerm) return;
    const query = searchTerm
      .split("")
      .map((char) => (char !== " " ? char : "%20"))
      .join("");

    (async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&safeSearch=strict&key=${process.env.REACT_APP_API_KEY}`
      );
      let searches = await response.json();
      searches = searches.items;
      const refinedSearches = searches.map(({ id, snippet }) => {
        const { videoId } = id;
        const { channelTitle, description, publishedAt, thumbnails, title } =
          snippet;
        return {
          title,
          videoId,
          channelTitle,
          description,
          publishedAt,
          thumbnail: thumbnails.medium.url,
        };
      });
      setSearchResults(refinedSearches);
    })();
  };

  return (
    <div>
      {/* <Nav /> */}
      <Navigation />
<MobileNavigation/>
      {/* <SearchBar setSearchTerm={setSearchTerm} getSearch={getSearch} /> */}
      <Routings searchResults={searchResults} />
      <Footer />
    </div>
  );
};

export default YoutubeApp;
