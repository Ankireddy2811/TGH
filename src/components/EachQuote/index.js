import "./index.css"

const EachQuote = (props)=>{
  const {eachContent,changeLikedStatus} = props 
  const {_id,isLiked} = eachContent
  console.log(isLiked);

  const onLikeButton = ()=>{
    changeLikedStatus(_id);
  }

  const addStyle = isLiked ?"like-background":"";

  return(
    <div className="each-quote">
       <img src="https://s3-alpha-sig.figma.com/img/ae9f/ac9c/7ccad8abdd3ea527bd7a0d878bc8cef7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nu3chGgrYewVa~uaXpyRF1iT2I5abiS0YWdHnCwUkPcHgHx1HYtdTJ5g1jzTstzoI3kt~orjE0WnNdL-A56rLnG2iVYbo4gMujMMAHknO7TZqfErxjFUzPKruqXIACu3FDxI5EsLqv3TJi4r~NjGLnXjYjIw~qqidQnhCQboPWtVBH6bLWPRkjbij5ncg7Z9fhBR27V-Xrja8IllB1~0HKISNzO16BH3CsoeFhf6xT6n6ts55FsckNc26I4OCvA8zm7K9uHoEyhtmV0wvRByOxMY42ECI9QTaJaWGNJ-LYDP2FCXt-QiwDqwL6iQv8l6UdElhf4JTzk3Kj~t9VAjLw__" alt="quote_image" className="quote-image"/>
       <div className="quote-content-container">
         <h2 className="quote-author">{eachContent.author}</h2>
         <p className="quote-content">{eachContent.content}</p>
         <div className="images-container">
          <button type="button" onClick={onLikeButton} className="like-button">
            <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1707558644/Likes_1_ynmzpz.png" alt="like-image" className={`${addStyle} imagess`}/>
          </button>
           
            <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1707558725/Comment_ihzlg2.png" alt="comment-image" className="imagess"/>
            <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1707558825/Send_x1jpuy.png" alt="send-image" className="imagess"/>
         </div>
         <ul className="unorederd-list">
            {eachContent.tags.map(eachItem=>(
                <li className="each-list-item">{eachItem}</li>
            ))}
         </ul>
       </div>
    </div>
  )
}

export default EachQuote