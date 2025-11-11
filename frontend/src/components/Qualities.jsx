import React from "react";
import { data } from "../restApi.json";

const Qualities = () => {
  return (
    <section className="qualities">
      <div className="container">
        {data[0].ourQualities.map((quality) => (
          <div className="card" key={quality.id}>
            <img src={quality.image} alt={quality.title} />
            <h3 className="title">{quality.title}</h3>
            <p className="description">{quality.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
