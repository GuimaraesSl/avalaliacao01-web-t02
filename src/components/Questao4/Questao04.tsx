import { useEffect, useState } from "react";

type CapitaisType = {
  capital: string[];
  population: number;
};

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
  const [maiorCap, setMaiorCap] = useState<string[]>([]);
  const [menorCap, setMenorCap] = useState<string[]>([]);
  const [maiorPop, setMaiorPop] = useState<number | null>(null);
  const [menorPop, setMenorPop] = useState<number | null>(null);

  useEffect(() => {
    const getAsyncCountries = async () => {
      try {
        const countries = await getCountries;

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
        console.error(error);
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
