import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Linkedin, Facebook, Instagram, Youtube, MailPlus } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full max-w-full bg-neutral-100">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center lg:justify-between">
        <figure>
          <StaticImage
            src="../images/logo.svg"
            alt="Logo da Granto Seguros"
            width={96}
            height={96}
            layout="fixed"
          />
        </figure>
        <div>
          <div className="flex justify-center gap-6">
            <a
              href="https://grantoseguros.com"
              target="_blank"
              className="text-xl font-medium"
            >
              Site
            </a>
            <a
              href="https://grantoseguros.com/blog"
              target="_blank"
              className="text-xl font-medium"
            >
              Blog
            </a>
          </div>
          <span className="block text-center">
            Copyright ©{currentYear} GRANTO | Todos os Direitos Reservados
          </span>
        </div>
        <div className="my-4 flex gap-4">
          <a
            href="https://www.linkedin.com/company/granto-seguros/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.facebook.com/grantoseguros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/grantoseguros/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UC5OjMxB8tpeiKc3Gibxl7gg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <Youtube />
          </a>
          <a
            href="mailto:contato@grantoseguros.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MailPlus />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
