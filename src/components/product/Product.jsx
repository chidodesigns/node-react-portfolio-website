import { useContext } from "react";
import { ThemeContext } from "../../context";
import './product.css'

function Product({img, link, title}) {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='p'>
            <div className="p-browser">
            <h3 className='p-title' style={{color: darkMode &&"#222"}}>{title}</h3>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Product
