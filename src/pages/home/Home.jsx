import React from 'react'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Intro from '../../components/intro/Intro'
import ProductList from '../../components/productList/ProductList'

function Home() {
    return (
        <>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
        </>
    )
}

export default Home
