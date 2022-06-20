import React, { Fragment } from 'react';
import "./Service.css";

function Service() {
    return (
        <Fragment >
           <section id="service" className="mh-service text-white">
               <div className="container">
                   <div className="row">
                       <div className="col-sm-12 text-center">
                           <h3>What We do</h3>
                       </div>
                       <div className="col-sm-4">
                           <div className="mh-service-item">
                            <i className="fa fa-paint-brush purple-color"></i>
                               <h3>Logo Designs</h3>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel molestiae praesentium deleniti quibusdam, deserunt maxime voluptate debitis obcaecati ratione distinctio?</p>

                           </div>
                       </div>
                       <div className="col-sm-4">
                           <div className="mh-service-item">
                               <i className="fa fa-bullhorn iron-color"></i>
                               <h3>Flyer Designs</h3>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel molestiae praesentium deleniti quibusdam, deserunt maxime voluptate debitis obcaecati ratione distinctio?</p>

                           </div>
                       </div>
                       <div className="col-sm-4">
                           <div className="mh-service-item">
                               <i className="fa fa-palette purple-color"></i>
                               <h3>Cover Arts</h3>
                               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel molestiae praesentium deleniti quibusdam, deserunt maxime voluptate debitis obcaecati ratione distinctio?</p>

                           </div>
                       </div>
                   </div>
               </div>

               <br />
           </section> 
        </Fragment>
    )
}

export default Service
