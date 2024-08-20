import axios from "axios";
import { useEffect, useState } from "react";

type CapitaisType = {
  capital: string[];
  population: number;
};

const getCountries = async () : Promise<CapitaisType[]>=> {
  const response = axios.get("https://restcountries.com/v3.1/region/europe?fields=capital,population")
                      .then((asw) => asw.data)
                      .catch((err) => {throw new Error("Não foi possível acessar o serviço", err)})
    
  return response 
}



const Questao03 = () => {
  const [maiorCap, setMaiorCap] = useState<string[]>([]);
  const [menorCap, setMenorCap] = useState<string[]>([]);
  const [maiorPop, setMaiorPop] = useState<number | null>(null);
  const [menorPop, setMenorPop] = useState<number | null>(null);

  useEffect(() => {
    const getAsyncCountries = async () => {
      try {
        const countries = await getCountries();

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
      <div>Questão03</div>
      <div>Maior Capital: {maiorCap}</div>
      <div>Maior População: {maiorPop}</div>
      <div>Menor Capital: {menorCap}</div>
      <div>Menor População: {menorPop}</div>
    </div>
  );
};

export { Questao03 };
