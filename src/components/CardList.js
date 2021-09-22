import React, { useState } from 'react'
import heartgray from './heartgray.svg';
import heartred from './heartred.svg';

const CardList = ({ title, date, url }) => {
  const [liked, setLiked] = useState(false)
  return (
    <div className="cardcontainer">
    <div className="card">
    <div className="topContainer">
    <div className="title">{title}</div> 
   
   
    </div>
      <img src={url} style={{width: "100%"}} />
      {/* <div className="bottomContainer">
      {explanation}
      </div> */}
      <div className="date">{date}</div>
      <div className="like">
      <img
          src={liked ? heartred : heartgray}
          alt="like button"
          onClick={() => setLiked((curr) => !curr)}
        ></img>
      </div>
    </div> 

    </div>
  )
}

export default CardList
