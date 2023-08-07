import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <header className=" w-full max-w-full bg-neutral-100 lg:mb-16">
      <figure className="mx-auto max-w-[1240px]">
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
