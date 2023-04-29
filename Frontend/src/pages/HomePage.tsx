import React from 'react'
import Body from '../components/Body'
const HomePage = (props) => {
  return (
    <div>
        {/* Header */}
        <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
            
                {props.aboutme.map((item) => 
                  {
                      return (
                          <div>
                            <h1 className="header-title">
                <span className="up">HI!</span>
                            <span className="down">I am {item.name} </span>
                        </h1>
            <p className="header-subtitle">{item.title}</p>            

            <a href =""> <button className="btn btn-primary">Visit My Works</button></a>
                          </div>
                      )
                  })}
                        
                       
                
            
        </div>              
    </header>
    {/* End Header */}
   {/* About  */}
    <section className="section pt-0" id="about">
        <div className="container text-center">
        {props.aboutme.map((item) => 
{
    return (
        <div key={item.id} className="about">
        <div className="about-img-holder">
            <img src={item.img} className="about-img" alt="Avatar"/>
        </div>
        <div className="about-caption">
            <h2 className="section-title mb-3">About Me</h2>
            <p className="section-text" >{item.subtitle}</p>
            <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
        </div>              
    </div>
    )
})}
                  
        </div>
    </section> 
    {/* End About  */}
    {/* Skill */}
    <section className="section" id="skill">
        <div className="container text-center">
            <h6 className="section-title mb-6">Skill</h6>
         
            <div className="row">
                
            {props.skills.map((item) => 
{
    return (
        <div key={item.id}  className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={item.src} alt="" className="icon"/>
                            <h6 className="title">{item.skills} </h6>
                            <p className="subtitle">{item.subtitle}</p>
                        </div>
                    </div>
                </div>
        
    )
})}
                    

            </div>
        </div>
    </section>
    {/* End Skill */}
    {/* Project */}
    <section className="section" id="project">
        <div className="container text-center">
            <p className="section-subtitle">What I Did ?</p>
            <h6 className="section-title mb-6">Project</h6>
        
            <div className="row">
            {props.products.map((item) => 
{
    return (
        <div key={item.id} className="col-md-4">
        <a href="" className="portfolio-card">
            <img src="{item.image.file.thumbUrl}" className="portfolio-card-img" alt="Project"/>    
            <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                    <h5>{item.name}</h5>
                    <p className="font-weight-normal">Category: {item.category} </p>
                </span>                         
            </span>                     
        </a>
    </div>
        
    )
})}
                   
                
                
            </div>
        </div>
    </section> 
    <section className="section-sm bg-primary">
  
        <div className="container text-center text-sm-left">
     
            <div className="row align-items-center">
                <div className="col-sm offset-md-1 mb-4 mb-md-0">
                    <h6 className="title text-light">Want to work with me?</h6>
                    <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
                </div>
                <div className="col-sm offset-sm-2 offset-md-3">
                    <button className="btn btn-lg my-font btn-light rounded"><a href="https://www.facebook.com/Zuwno/">Hire Me</a></button>
                </div>
            </div> 
        </div>
    </section> 
    {/* End Project */}
    {/* Testimonial */}

    <section className="section" id="feedback">
        <div className="container text-center">
            <p className="section-subtitle">What Think Client About Me ?</p>
            <h6 className="section-title mb-6">Testmonial</h6>
            <div className="row">
 
 {props.testmonial.map((item) => 
{
    return (
        <div  key={item.id} className="col-md-6">
        <div  className="testimonial-card">
        <div className="testimonial-card-img-holder">
            <img src={item.avatar} className="testimonial-card-img" alt="Avatar"/>                           
        </div>
        <div className="testimonial-card-body">
            <p className="testimonial-card-subtitle">{item.name}</p>
            <h6 className="testimonial-card-title">{item.content}</h6>
        </div>
    </div>
    </div>
    )
})}
                    
                </div>
        
        </div> 
    </section> 
    {/* End Testimonial */}
    {/* Blog */}
    <section className="section" id="blog">
    
        <div className="container text-center">
            <p className="section-subtitle">Recent Posts?</p>
            <h6 className="section-title mb-6">Blog</h6>
          
            {props.blogs.map((item) => 
{
    return (
        <div key={item.id} className="blog-card">
                <div className="blog-card-header">
                    <img src={item.img} className="blog-card-img" alt=""/>
                </div>
                <div className="blog-card-body">
                    <h5 className="blog-card-title">{item.title}</h5>

                    <p className="blog-card-caption">
                        <a href="#">By: Admin</a>
                        <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                        <a href="#"><i className="ti-comment"></i> 123</a>
                    </p>
                    <p>{item.subtitle}</p>


                    <a href="" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                </div>
            </div>
    )
})}
            
  
        </div>
    </section>
    {/* End Blog  */}
    {/* Contact */}
    <section className="section" id="contact">
        <div className="container text-center">
            <p className="section-subtitle">How can you communicate?</p>
            <h6 className="section-title mb-5">Contact Me</h6>
   
            <form action="" className="contact-form col-md-10 col-lg-8 m-auto" id="form-add">
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <input type="text" size="50" id="contact-name" class="form-control" placeholder="Your Name" required/>                 
                    </div>
                    <div className="form-group col-sm-6">
                        <input type="email" className="form-control" id="contact-email" placeholder="Enter Email" required/>                 
                    </div>
                    <div className="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6" class="form-control" placeholder="Write Something"></textarea>
                    </div>
                    <div className="form-group col-sm-12 mt-3">              
                        <button value="Send Message" className="btn btn-outline-primary rounded"> Send mess </button>
                    </div>
                </div>  
            </form>
        </div>
    </section>
    {/* End Contact */}
    </div>
  )
}

export default HomePage