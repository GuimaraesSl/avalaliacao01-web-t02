import { useEffect, useState } from "react";

type CapitaisType = {
  capital: string[];
  population: number;
};

// Simulação de uma chamada assíncrona que retorna uma lista de países
// A função retorna uma promessa que resolve com uma lista de objetos
// contendo as capitais e populações de alguns países após um pequeno delay.
const getCountries = new Promise<CapitaisType[]>(
  (resolve, rejects) => {
    setTimeout(() => {
      resolve([
        {capital: ["Dublin"], population: 4994724},
        {capital: ["Nicosia"], population: 1207361},
        {capital: ["Madrid"], population: 47351567}
      ])
    }, 200)
  }
)


const Questao04 = () => {
  // Declaração dos estados para armazenar as capitais e populações dos países
  const [maiorCap, setMaiorCap] = useState<string[]>([]);
  const [menorCap, setMenorCap] = useState<string[]>([]);
  const [maiorPop, setMaiorPop] = useState<number | null>(null);
  const [menorPop, setMenorPop] = useState<number | null>(null);

  useEffect(() => {
    // Função assíncrona dentro do useEffect para buscar e processar os dados dos países
    const getAsyncCountries = async () => {
      try {
        const countries = await getCountries;
        
        // Itera sobre cada país na lista para determinar o país com a maior e menor população
        countries.forEach((capital) => {
          if (maiorPop === null || capital.population > maiorPop) {
            setMaiorPop(capital.population);
            setMaiorCap(capital.capital);
          }
          if (menorPop === null || capital.population < menorPop) {
            setMenorPop(capital.population);
            setMenorCap(capital.capital);
          }
        });
      } catch (error) {
        throw new Error("Não foi possível recuperar os dados")
      }
    };

    getAsyncCountries();
  }, [maiorPop, menorPop]);


  return (
    <div>
      <div>Questão04</div>
      <div>Maior Capital: {maiorCap}</div>
      <div>Maior População: {maiorPop}</div>
      <div>Menor Capital: {menorCap}</div>
      <div>Menor População: {menorPop}</div>
    </div>
  );
};

export { Questao04 };
