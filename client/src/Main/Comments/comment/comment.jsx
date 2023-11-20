import styles from './comment.scss'
export default function Comment({comment})
{
    return  (
        <>
        <div className="comment">
          <img src="" alt="" />
            <span className='name'>{comment.userName}</span>
          <div className="info">
            <p>{comment.comment}</p>
          </div>
          <div className="date">
          <span >1 hour ago</span>
          </div>
        </div>
        </>
    )
}