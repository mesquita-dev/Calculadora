import React, { useState } from 'react'
import { graphql, type HeadFC, type PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../components/Header'

import Insurance from '../components/MainForm/Insurance'
import Duration from '../components/MainForm/Duration'
import CompanySize from '../components/MainForm/CompanySize'
import MainContactForm from '../components/MainForm/MainContactForm'
import Result from '../components/MainForm/Result'

import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const advantage = data.allMarkdownRemark.nodes

  const [currentStep, setCurrentStep] = useState(1)
  const [formattedValue, setFormattedValue] = useState('')
  const [duration, setDuration] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [mainContactInfo, setMainContactInfo] = useState({})
  const [result, setResult] = useState('')

  const handleNextStep = (stepData) => {
    setFormData(stepData)
    setCurrentStep(currentStep + 1)
  }

  const setFormData = (stepData) => {
    switch (currentStep) {
      case 1:
        setFormattedValue(stepData)
        break
      case 2:
        setDuration(stepData)
        break
      case 3:
        setCompanySize(stepData)
        break
      case 4:
        setMainContactInfo(stepData)
        handleCalculateResult()
        break
      default:
        break
    }
  }

  const handleCalculateResult = () => {
    const sizeValues = {
      MEI: { size: 1, minValue: 290 },
      ME: { size: 0.8, minValue: 250 },
      Média: { size: 0.5, minValue: 190 },
      Grande: { size: 0.4, minValue: 170 },
    };

    console.log(formattedValue, duration, companySize)
    const { size, minValue } = sizeValues[companySize]; // Make sure companySize is properly set

    const prize = (formattedValue * duration * size / 36500)
    console.log(prize)

    const prizeAsNumber = parseFloat(prize)

    const finalValue = Math.max(prizeAsNumber, minValue);

    function formatNumberWithCommas(number) {
      return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const formattedFinalValue = `R$ ${formatNumberWithCommas(finalValue)}`;

    setResult(formattedFinalValue);

  };

  return (
    <div>
      <Header />

      <main className="mx-auto flex max-w-[1240px] justify-center lg:mb-9 lg:justify-between">
        <figure className="hidden lg:block">
          <StaticImage
            src="../images/img-calculadora.svg"
            alt="Ilustração de uma mulher"
          />
        </figure>

        <div>
          <div className="rounded-lg bg-neutral-100 p-10 lg:max-w-xl lg:drop-shadow-md">
            <h1 className="mb-1 text-center text-2xl font-semibold text-neutral-950 lg:text-3xl">
              Simular seguro garantia é fácil!
            </h1>
            <p className="mx-auto mb-4 max-w-sm text-center text-sm text-neutral-800 lg:text-base">
              Preencha as informações e veja o valor estimado em poucos
              segundos.
            </p>

            {currentStep === 1 && <Insurance onSubmit={handleNextStep} />}
            {currentStep === 2 && <Duration onSubmit={handleNextStep} />}
            {currentStep === 3 && <CompanySize onSubmit={handleNextStep} />}
            {currentStep === 4 && <MainContactForm onSubmit={handleNextStep} />}
            {currentStep === 5 && <Result result={result} />}

            <span className="mt-3 block text-center text-xs lg:text-sm">
              * Esta é uma simulação, os valores do seguro são aproximados. Para
              obter valores concetros, fale com um especialista da{' '}
              <strong>Granto Seguros</strong>
            </span>
          </div>
        </div>
      </main>

      <section className="w-full max-w-full bg-neutral-100 lg:mb-9">
        <div className="mx-auto max-w-[1240px] py-8">
          <h2 className="text-center text-2xl font-semibold text-neutral-950 lg:text-3xl">
            Como funciona a calculadora?
          </h2>

          <div className="mt-6 flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
            {advantage.map((item: any) => (
              <div
                key={item.id}
                className="max-w-xs rounded-lg bg-white p-7 text-center drop-shadow-md"
              >
                <div className="rounded-md bg-[#4510a3] p-3">
                  <h3 className="text-lg font-bold uppercase text-white">
                    {item.frontmatter.title}
                  </h3>
                </div>

                <p className="mt-3 text-neutral-800">
                  {item.frontmatter.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <figure className="hidden w-full lg:block">
          <StaticImage
            src="../images/teste.jpg"
            alt="Imagem de duas pessoas conversando"
            layout="constrained"
            className="h-full" // Definindo a altura da imagem como a altura total da seção
          />
        </figure>

        <div className="flex flex-col justify-center bg-[#4510a3] p-10">
          <h3 className="mb-4 text-2xl font-bold text-white lg:text-4xl">
            Entre em contato com nossos especialistas
          </h3>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}

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

export default IndexPage

export const Head: HeadFC = () => <title>Calculadora | Granto Seguros</title>
