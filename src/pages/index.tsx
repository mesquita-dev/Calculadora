import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Card from "../components/Card";
import CardCalculator from "../components/CardCalculator";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
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

      <main className="flex justify-between max-w-[1240px] mx-auto mb-6">
        <figure>
          <StaticImage
            src="../images/img-calculadora.svg"
            alt="Ilustração de uma mulher"
          />
        </figure>

        <div>
          <div className="bg-neutral-100 rounded-lg p-10 max-w-xl">
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

            <span>
              * Esta é uma simulação, os valores do seguro são aproximados. Para
              obter valores concetros, fale com um especialista da{" "}
              <strong>Granto Seguros</strong>
            </span>
          </div>
        </div>
      </main>

      <section className="bg-neutral-100 w-full max-w-full">
        <div className="max-w-[1240px] mx-auto py-4">
          <h2 className="text-center font-semibold text-2xl text-neutral-950">
            Como funciona a calculadora
          </h2>

          <CardCalculator
            title="Vigência"
            description="É o tempo que o seguro deve estar válido de acordo com a exigência do contrato. Ou seja, o prazo de validade do seguro."
            altImage="Icone de um relógio"
          />
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Calculadora | Granto Seguros</title>;
