import axios from "axios";
import { useEffect, useState } from "react";

type CapitaisType = {
  capital: string[];
  population: number;
};

// Função assíncrona para buscar os países europeus e suas populações
// Usando async para encapsular a requição
const getCountries = async (): Promise<CapitaisType[]> => {
  const response = axios.get("https://restcountries.com/v3.1/region/europe?fields=capital,population")
    .then((asw) => asw.data)
    .catch((err) => { throw new Error("Não foi possível acessar o serviço", err) });

  return response;
}

const Questao03 = () => {
  // Estados para armazenar a capital e população do país com a maior e menor população
  const [maiorCap, setMaiorCap] = useState<string[]>([]);
  const [menorCap, setMenorCap] = useState<string[]>([]);
  const [maiorPop, setMaiorPop] = useState<number | null>(null);
  const [menorPop, setMenorPop] = useState<number | null>(null);

  useEffect(() => {
    // Função assíncrona dentro do useEffect para buscar e processar os dados dos países
    // Utiliza a função getCountries para obter os dados e atualiza os estados com base na maior e menor população
    const getAsyncCountries = async () => {
      try {
        const countries = await getCountries();

        // Uso do forEach para percorrer cada capital e definir entre elas as maiores e menores.
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
