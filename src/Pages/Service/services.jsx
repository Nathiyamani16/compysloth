import {} from 'react';
import "../Service/services.scss"
import { services } from '../../utils/service';

const Services = () => {
  return (
        <div className='section'>
      <div className='section-center'>
        <article className='header'>
          <h2>
            Custom Furniture <br />
            Built Only For You
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis 
          <br/>consectetur reprehenderit non aliquam voluptates dolore aut vero 
          <br/>consequuntur.
          </p>
        </article>
        <div className='services-center'>
          {services.map((services) => {
            const { id, icon, title, text } = services;
            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
      </div>
  );
};

export default Services;



