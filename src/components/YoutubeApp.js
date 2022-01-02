import React, { useState } from 'react';
import Nav from './common/Nav';
import Routings from './Routings';
import Footer from './common/Footer';
import ThemeProvider from '../contexts/theme.context';

const YoutubeApp = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTrue, toggleIt] = useState(false);

  const getSearch = () => {
    if (!searchTerm) return;
    const query = searchTerm
      .split('')
      .map((char) => (char !== ' ' ? char : '%20'))
      .join('');

    (async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=${query}&safeSearch=strict&key=${process.env.REACT_APP_API_KEY}`
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
    <>
      <ThemeProvider>
        <Nav
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getSearch={getSearch}
          isTrue={isTrue}
          toggleIt={toggleIt}
        />
        <Routings searchResults={searchResults} />
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default YoutubeApp;
