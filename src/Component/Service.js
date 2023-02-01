import React from "react";
import { service } from "../data";
import Title from "./Title";

const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {service.map((serv) => {
          const { title, desc, id } = serv;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className="fas fa-wallet fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
