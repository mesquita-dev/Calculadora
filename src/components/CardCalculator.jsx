import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const CardCalculator = ({ title, description, img, altImage }) => {
  return (
    <article>
      <div>
          <StaticImage
            src="../images/img-calculadora.svg"
            alt={altImage}
            width={60}
            height={60}
          />

        <h3>{title}</h3>
      </div>

      {description}
    </article>
  );
};

export default CardCalculator;
