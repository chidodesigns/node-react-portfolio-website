import './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/location.png"
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../context';

function Contact() {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit =  (e) => {
         e.preventDefault()
         emailjs.sendForm('service_mvq68ma', 'template_9dmrfgu', formRef.current, 'user_1ZQREuSWcdz2DzreZi6dl')
         .then((result) => {
             console.log(result.text);
             setDone(true)
         }, (error) => {
             console.log(error.text);
         });

    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +44 7534420485
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            chidodesigns@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            195 Homerton High Street
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Whats your story </b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name'/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject'/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder='Email' name='user_email'/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} name="message" placeholder="Message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
