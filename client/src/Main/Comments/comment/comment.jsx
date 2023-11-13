import styles from './comment.scss'
export default function Comment({comment})
{
    return  (
        <>
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
            <span className='name'>{comment.name}</span>
          <div className="info">
            <p>{comment.desc}</p>
          </div>
          <div className="date">
          <span >1 hour ago</span>
          </div>
        </div>
        </>
    )
}