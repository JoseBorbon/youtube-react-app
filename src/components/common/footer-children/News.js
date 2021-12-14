import { NewsSearch } from './NewsSearch';
import React, { Component } from 'react';
import './News.css';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: '',
      userInput: '',
      language: '',
    };
  }

  componentDidMount() {
    const { userInput, language } = this.state;
    fetch(`
    https://newsapi.org/v2/${
      userInput === ''
        ? 'top-headlines?country=us&apiKey=523f9a47b6ea4d95b8ce576a58d143b6'
        : `everything?q=${userInput}&from=2021-11-13&sortBy=publishedAtrelevancy&language=${language}&apiKey=523f9a47b6ea4d95b8ce576a58d143b6`
    }
    `)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          newsData: data,
        });
      })
      .catch(console.log);
  }

  fetchNewsData = (e) => {
    e.preventDefault();
    const { userInput, language } = this.state;
    fetch(`
      https://newsapi.org/v2/${
        userInput === ''
          ? 'top-headlines?country=us&apiKey=523f9a47b6ea4d95b8ce576a58d143b6'
          : `everything?q=${userInput}&from=2021-11-13&sortBy=publishedAtrelevancy&language=${language}&apiKey=523f9a47b6ea4d95b8ce576a58d143b6`
      }
      `)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          newsData: data,
        });
      })
      .catch(console.log);
  };

  handleLanguage = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <main>
        <div className="news-box">
          <NewsSearch
            newsData={this.state.newsData}
            handleLanguage={this.handleLanguage}
            handleUserInput={this.handleUserInput}
            state={this.state}
            fetchNewsData={this.fetchNewsData}
          />
        </div>
      </main>
    );
  }
}
