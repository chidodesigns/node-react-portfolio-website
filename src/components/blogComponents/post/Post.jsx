import "./post.css"

function Post() {
    return (
        <div className='post'>
        <img className="postImg" src="https://images.pexels.com/photos/8264573/pexels-photo-8264573.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
            <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aut repudiandae in? Minima quia aspernatur rerum molestias? Velit reprehenderit minus eligendi. Maxime, laborum minima sunt sapiente quo deserunt dolorum in.</p>
        </div>
    </div>
    )
}

export default Post
