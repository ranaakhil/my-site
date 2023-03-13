import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
       <h5>What I Offer</h5>
       <h2>Services</h2>

       <div className="container services_container">
          <article className="service">
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Bring more clarity to your flows with a strong visual identity.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Use our UI to create an app or web page that's easy for your users to understand and identify.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>ui elements are easy to communicate and make it easy for the user. </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>They should be focused on simple, clear, nice and appealing design.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>We’re very excited to share details of the new UI (User Interface), which we are rolling out to all users.</p>
              </li>
            </ul>
          </article>
          {/* END OF UI/UX  */}


          <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>We are a web design team focused on effective and efficient website development</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>developing with the most modern technologies. </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>If you need a website or web design, please contact us. We can make any website according to your needs.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Web Development includes but is not limited to: CSS, Javascript, Jquery, HTML and PHP.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Power your web app with the most powerful and flexible Web toolset available.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>We have developed our own framework and cloud based CMS for our clients.</p>
              </li>
            </ul>
          </article>
          {/* END OF WEB DEVEOPMENT  */}


          <article className="service">
            <div className="service_head">
              <h3>Content Creaion</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Create, share and display your media content in a format that suits your needs.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Create high-impact, engaging content that converts visitors into customers.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Create visually stunning content and share your passion with the world.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>A blog, a web page, or a channel for sharing content.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Our content creation service provides new ways of thinking about how you do business.</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION  */}
        </div>
    </section>
  )
}

export default Services