import styles from './comment.scss'
export default function Comment({comment})
{
    return  (
        <>
        <div className="comment">
        <div className='user-info'>
            <div className='logo'><span>{comment.userName[0]}</span></div>
            <span className='name'>{comment.userName}</span>
        </div>
          
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