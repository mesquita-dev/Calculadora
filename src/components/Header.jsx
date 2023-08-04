import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="mb-16 bg-neutral-100 w-full max-w-full">
        <figure className="max-w-[1240px] mx-auto">
          <StaticImage
            src="../images/logo.svg"
            alt="Logo da Granto Seguros"
            width={96}
            height={96}
            layout="fixed"
          />
        </figure>
      </header>
  )
}

export default Header
