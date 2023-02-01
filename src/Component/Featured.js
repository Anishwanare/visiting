import React from "react";

import { feature } from "../data";
import Title from "./Title";

const Featured = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured"  subTitle="tours" />

      <div className="section-center featured-center">
        {feature.map((list) => {
          const { id, img, title, desc, country, days, cost, date } = list;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{desc}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
