import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Header from '../components/Header'
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import Footer from '../components/Footer'

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const advantage = data.allMarkdownRemark.nodes;

  return (
    <div>
      <Header />

      <main className="flex justify-between max-w-[1240px] mx-auto mb-9">
        <figure>
          <StaticImage
            src="../images/img-calculadora.svg"
            alt="Ilustração de uma mulher"
          />
        </figure>

        <div>
          <div className="bg-neutral-100 rounded-lg p-10 max-w-xl drop-shadow-md">
            <h1 className="text-center font-semibold text-3xl text-neutral-950 mb-1">
              Simular seguro garantia é fácil!
            </h1>
            <p className="max-w-sm text-center mx-auto text-neutral-800 mb-4">
              Preencha as informações e veja o valor estimado em poucos
              segundos.
            </p>

            <Card
              text="Qual a importância segurada"
              typeInput="text"
              placeholder="Importância Segurada"
              btnText="Próximo"
            />

            <span className="text-sm text-center block mt-3">
              * Esta é uma simulação, os valores do seguro são aproximados. Para
              obter valores concetros, fale com um especialista da <strong>Granto Seguros</strong>
            </span>
          </div>
        </div>
      </main>

      <section className="bg-neutral-100 w-full max-w-full mb-9">
        <div className="max-w-[1240px] mx-auto py-8">
          <h2 className="text-center font-semibold text-3xl text-neutral-950">
            Como funciona a calculadora?
          </h2>

          <div className="flex justify-between mt-6">
            {advantage.map((item: any) => (
              <div key={item.id} className="max-w-xs bg-white p-7 rounded-lg text-center drop-shadow-md">
                <div className="bg-[#4510a3] p-3 rounded-md">
                  <h3 className="text-lg font-bold text-white uppercase">{item.frontmatter.title}</h3>
                </div>

                <p className="mt-3 text-neutral-800">{item.frontmatter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 max-w-[1440px] mx-auto">
        <figure className="w-full block">
          <StaticImage
            src="../images/teste.jpg"
            alt="Imagem de duas pessoas conversando"
            layout="constrained"
            className="h-full"  // Definindo a altura da imagem como a altura total da seção
          />
        </figure>

        <div className="bg-[#4510a3] p-10 flex flex-col justify-center">
          <h3 className="text-white text-4xl font-bold mb-4">Entre em contato com nossos especialistas</h3>
          <ContactForm />
        </div>
      </section>


      <Footer />
    </div>
  );
};

export const query = graphql`
query advantage {
  allMarkdownRemark {
    nodes {
      html
      id
      frontmatter {
        title
        description
        icon {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`

export default IndexPage;

export const Head: HeadFC = () => <title>Calculadora | Granto Seguros</title>;
