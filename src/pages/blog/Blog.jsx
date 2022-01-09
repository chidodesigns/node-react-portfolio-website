import "./blog.css";
import ChidoProfile from "../../img/chidoukaigwe.jpeg";
import Posts from "../../components/blogComponents/posts/Posts";

function Blog() {
  return (
    <>
      <div className="blog-i">
        <div className="blog-i-left">
          <div className="blog-i-left-wrapper">
            <h2 className="blog-i-name">Blog</h2>
            <p className="blog-i-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis fugit minima inventore accusantium est molestias,
              placeat suscipit, quidem sequi unde sapiente. Expedita fugiat
              architecto fugit quasi recusandae cumque voluptate unde?
            </p>
          </div>
        </div>
        <div className="blog-i-right">
          <img
            className="blog-i-img"
            src="https://images.pexels.com/photos/7809122/pexels-photo-7809122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
      <div className="blog-i blog-i-wrapper">
        <Posts />
      </div>
    </>
  );
}

export default Blog;
