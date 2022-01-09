import Product from '../product/Product'
import {products} from "../../data"
import './productList.css'

function ProductList() {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>Personal Projects</h1>
                <p className='pl-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestiae repellat quaerat porro repellendus autem ipsum, accusantium accusamus.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => ( 

                <Product key= {item.id} img={item.img} link={item.link}  title={item.title}/>
                
                ))}
               
            </div>
        </div>
    )
}

export default ProductList
