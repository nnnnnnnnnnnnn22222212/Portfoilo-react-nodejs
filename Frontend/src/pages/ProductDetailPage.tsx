import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = (props) => {
   
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(props.products.find(product => product.id == id))
    }, [props])
console.log(product);

    return (
        <div>
            {props.products.map((item) => 
{
    return (
        
        <div>
            <header id="home" className="header">
    <div className="overlay"></div>
    <div className="header-content container">
      <h1 className="header-title">
        <span className="up">Project</span> 
        <span className="down"></span>
      </h1>
     
      <a href={item.github} > <button className="btn btn-primary rounded"><ion-icon name="logo-github"></ion-icon> Github </button></a>
      <a href={item.preview} ><button className="btn btn-primary rounded"><ion-icon name="pulse-outline"></ion-icon> Preview </button></a>
      <button className="btn btn-primary rounded"><ion-icon name="pricetag-outline"></ion-icon>{item.category}    </button>
      <br/>
      <button className="btn btn-primary rounded">Start time  {item.starttime}   </button>
      <button className="btn btn-primary rounded">End time  {item?.endtime}   </button>
      </div>
  </header>
  
    <section className="section pt-0" id="about">
  
        <div className="container text-center">
    
            <div className="about">
                <div className="about-img-holder">
                    <img src="${products.src}" className="about-img" alt=""/>
                </div>
                <div className="about-caption">
                    <h2 className="section-title mb-3">About this Project
                    </h2>
                    <p>
                    {item.starttime} 
                    </p>
                    
                </div>              
            </div>
        </div>
    </section> 
        </div>
    )
})}
            
    
        </div>
        
    )
}

export default ProductDetailPage