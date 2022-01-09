import "./singlePostCmp.css";

function SinglePostCmp() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/8264573/pexels-photo-8264573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fas fa-edit"></i>
            <i class="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Chido</b>
          </span>
          <span className="singlePostAuthor">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          soluta neque quisquam voluptas sequi fuga ipsa aliquid consequuntur
          officiis numquam, in eveniet dolorum consectetur placeat distinctio
          ipsum molestias iste illo?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Officiis quidem neque quod voluptate eum! Doloremque
          iste, possimus vel voluptate ut quaerat! Hic blanditiis quas porro nam
          ea unde! Nihil, reiciendis.
        </p>
      </div>
    </div>
  );
}

export default SinglePostCmp;
