import './about.css'
import Award from "../../img/medal.png"

function About() {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/6049954/pexels-photo-6049954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatem?
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fugit suscipit ad sed expedita ex laborum earum natus nam placeat inventore, ratione voluptates voluptate quibusdam modi nulla. Illum veritatis error, est molestiae recusandae voluptatum illo cumque, nemo magni quaerat nostrum?
                </p>
                <div className="a-award">
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design</h4>
                        <p className='a-award-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
