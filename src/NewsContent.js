import { Container } from '@material-ui/core'
import React from 'react'
import NewsDisplay from './NewsDisplay'
import './NewsContent.css'
 

const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore}) => {
    return (
        <Container className="containerM">
             <div className="content">

             {newsArray.map((newsItem) => (
          <NewsDisplay newsItem={newsItem} key={newsItem.title} />
        ))}

         {/* {loadMore <= newsResults && (
             <>
              <hr />
               <button className="loadMore" onClick={() => setLoadMore(loadMore + 15)}> Load more</button>
             </>
         )} */}
          
            </div>

        </Container>
    )
}

export default NewsContent
