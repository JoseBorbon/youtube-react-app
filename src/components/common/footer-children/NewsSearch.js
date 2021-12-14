import './NewsSearch.css';

export const NewsSearch = (props) => {

    console.log(props.newsData.articles)

    const editNewsContent=(str)=> {
        const content = str.split(" ").slice(0, 40).join(" ")
        let result = ""
        let endPoint = 0
        if (content.includes("[")) {
            for (let i = 0; i < content.length; i++) {
                if (content[i] === "[") {
                    endPoint = i
                   result = content.slice(0, endPoint)
                }
            
            }

        } 
        return result
    }


    const displayNews = props.newsData.status==="ok" && props.newsData.articles.map((news, i) => {
        
        return (

        <div key={i}>
            <article className="article">
                <h3>{news.title} <br></br><span className='author'> by {news.author ==="" ? "No source" : news.author }</span></h3>
                <a href={news.url} rel="noreferrer" target="_blank"><img src={news.urlToImage} alt='article'/></a>
                <p className='news-content'>
                    {news.content && editNewsContent(news.content)} 
                    <a className='career-for-link' rel="noreferrer" target={"_blank"} href={news.url}>
                        Click Here to Read More
                    </a>
                    </p>
                
             </article>
            <div className='line'></div>
        </div>
        )
     
    })


    console.log(props.state.language, "and" , props.state.userInput)

    return (
        <>
        <form onSubmit={props.fetchNewsData} className='news-form'>
        <input id="values" name="search-news" type="text" onChange={props.handleUserInput} />
        <select id="operation" name="operation" onChange={props.handleLanguage}>
          <option value="">Choose your language</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
          <option value="it">Italian</option>
          <option value="nl">Dutch</option>
          <option value="no">Norwegian</option>
          <option value="pt">Portuguese</option>
          <option value="he">Hebrew</option>
        </select>
        <select id="operation" name="operation" onChange={props.handleLanguage}>
          <option value="">Sort By</option>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Newest Article</option>
        </select>
        <button>Search</button>
      </form>
            {displayNews}
        
        </>
        )
}