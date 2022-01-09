import './intro.css'
import ChidoProfile from '../../img/chidoukaigwe.jpeg'

function Intro() {
    return (
        <div className='i'>
           <div className="i-left">
               <div className="i-left-wrapper">
                   <h2 className='i-intro'>Fullstack Javascript Developer</h2>
                   <h2 className='i-name'>Chido Ukaigwe</h2>
                   <div className="i-title">
                       <div className="i-title-wrapper">
                           <div className="i-title-item">Web Developer</div>
                           <div className="i-title-item">UI/UX Designer</div>
                           <div className="i-title-item">Photographer</div>
                           <div className="i-title-item">Writer</div>
                           <div className="i-title-item">Content Creator</div>
                       </div>
                   </div>
                   <p className="i-desc">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fugit minima inventore accusantium est molestias, placeat suscipit, quidem sequi unde sapiente. Expedita fugiat architecto fugit quasi recusandae cumque voluptate unde?
                   </p>
               </div>
           </div>
           <div className="i-left">
               <img className="i-img" src={ChidoProfile} alt="" />
           </div>
        </div>
    )
}

export default Intro
