import React from 'react';

const NewsItem = (props) => {
    
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/108045586-1728500736550-gettyimages-1455304110-dsc02065-edit.jpeg?v=1728500764&w=1920&h=1080":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span class="badge bg-danger">{source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"unknown": author} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem;