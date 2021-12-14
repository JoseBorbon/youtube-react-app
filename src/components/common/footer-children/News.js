import { NewsSearch } from "./NewsSearch"
import { Component } from "react/cjs/react.development"
import './News.css';

export class News extends Component  {

    constructor(){
      super()
      this.state={
        newsData:"",
        userInput:"",
        language:"",
        sort: "",
      }
    }

  componentDidMount(){
    const {userInput, language} = this.state
    fetch (`
    https://newsapi.org/v2/${userInput === "" ? 
    "top-headlines?country=us&apiKey=523f9a47b6ea4d95b8ce576a58d143b6" :
    `everything?q=${userInput}&from=2021-11-13&sortBy=publishedAtrelevancy&language=${language}&apiKey=523f9a47b6ea4d95b8ce576a58d143b6`}
    `)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        newsData: data
      })
    }).catch(console.log)
  }

    
    fetchNewsData =(e)=> {
      e.preventDefault()
      const {userInput, language, sort} = this.state
      fetch (`
      https://newsapi.org/v2/${userInput === "" ? 
      "top-headlines?country=us&apiKey=523f9a47b6ea4d95b8ce576a58d143b6" :
      `everything?q=${userInput}&from=2021-11-13&sortBy=${sort === "" ? "relevancy" : sort }&language=${language}&apiKey=523f9a47b6ea4d95b8ce576a58d143b6`}
      `)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          newsData: data,
        })
      }).catch(console.log)
    }
    
  


 handleLanguage = (e) =>{
    this.setState  ({
      language: e.target.value
    })
  }


 handleSort = (e) =>{
  this.setState  ({
    sort: e.target.value
  })
}

handleUserInput = (e) =>{
    this.setState  ({
      userInput: e.target.value
    })
  }

 



        render () {
            console.log(this.state)
            return(

                    <main>
                        <div className="news-box">
                            <NewsSearch 
                                newsData = {this.state.newsData}
                                handleLanguage = {this.handleLanguage}
                                handleSort ={this.handleSort}
                                handleUserInput ={this.handleUserInput}
                                state = {this.state}
                                fetchNewsData = {this.fetchNewsData}/>
                        </div>
                    </main>

            )
        }

}