import React from 'react';
import useService from '../../hooks/useService';
import IndividualService from '../individualservice/IndividualService';
import Loading from '../Shared/Loading/Loading';

import './Services.css';

const services=
[{"id":1,"name":"Root Canal Therapy","desc":"Root canal therapy, also known as endodontic therapy, is a dental treatment for removing infection from inside a tooth. It can also protect the tooth from future infections.It is carried out in the pulp of the tooth, which is the root canal.","price":"200","img":"https://www.kindpng.com/picc/m/478-4780750_root-canal-treatment-in-colombia-hd-png-download.png"},{"id":2,"name":"Dentures (False Teeth)","desc":"Dentures — also commonly known as false teeth — are fitted to act as a prosthesis for missing teeth. They’re often made of acrylic, nylon, or metal. They can be used in place of one tooth, several, or all of your teeth, and they fit snugly over the gums.","price":"145","img":"https://2.imimg.com/data2/UH/VJ/MY-3589736/dentures-500x500.jpg"},{"id":3,"name":"Dental Crown","desc":"Dental crowns are caps placed on top of damaged teeth. Crowns are used to protect, cover and restore the shape of your teeth when fillings don’t solve the problem. Dental crowns can be made out of metals, porcelain, resin and ceramics","price":"400","img":"https://www.birminghamdentalcenter.com/wp-content/uploads/sites/54/2020/08/types-of-dental-crowns-scaled-2048x1024.jpg"}]
const Services = () => {

  

    return (
        <div className='mt-5 mb-5 services'>
            <h1 className="text-center mb-5 fw-bold menu-heading">Services</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                
                
                {
                    services.length === 0 ? <Loading></Loading>
                    :
                     
                    services.map(service => <IndividualService
                        key={service._id}
                        service={service}
                    ></IndividualService>)
                }
            
                </div>
                
                </div>
            </div>
  </div>
    )}     


export default Services;