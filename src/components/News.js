import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
   const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState([true])
   const [page, setPage] = useState(1)
   const [totalResults, setTotalResults] = useState(0)
  
  const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const updateNews= async () => {
    props.setProgress(10);
    const { country, category,apiKey, pageSize, searchQuery } = props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=818e9e1d4c86460e9593b7640c7213f0&page=${page}&pageSize=${pageSize}&q=${encodeURIComponent(searchQuery)}`;     
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json() // to convert data into text  
    props.setProgress(50);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
    
  }
  useEffect(() => {
    document.title = `${capatalizeFirstLetter(props.category)} - DailyNews`;
    updateNews();
  }, [])
  
  // async componentDidUpdate(prevProps){
  //         if (prevProps.searchQuery!== props.searchQuery){
  //           await this.updateNews();
  //         }
  // }
  // const handlePreviousClick = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // }

  // const handleNextClick = async () => {
  //   setPage(page + 1)
  //   updateNews();
  // }
  const fetchMoreData = async () => {
    
      const { country, category, pageSize, searchQuery } = props;
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=818e9e1d4c86460e9593b7640c7213f0&page=${page+1}&pageSize=${pageSize}&q=${encodeURIComponent(searchQuery)}`;     
      setPage(page + 1)
      let data = await fetch(url);
  
      let parsedData = await data.json() // to convert data into text  
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
  };
  
    return (
      <div style={{margin: '0px 40px'}}>
        <h1 className='text-center' style={{ margin: '35px 0px', marginTop:'90px' }}>DailyNews - Top {capatalizeFirstLetter(props.category)} Headlines</h1>
        {/* {state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="contaner2">
            <div className="row">
            {articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
              })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousClick}> &#8592; Previous</button>
          <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &#8594;</button>
        </div> */}
      </div>
    );
  
}
News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general',
  searchQuery:''
}

News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  searchQuery: PropTypes.string
}
export default News;

