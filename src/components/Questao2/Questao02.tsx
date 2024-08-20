import { useRef } from "react";

const Questao02 = () => {
  // uso useRef do React para guardar a referência atual tanto do booleano que estou
  // manipulando com o botão quanto do componente da imagem.
  // Isso para evitar atualizações de estado e refresh desnecessários nos demais componentes, persistindo essa informação entre renderiações
  const isBackRef = useRef(false);
  // Como estou usando TS peguei a referência do HTMLImageElemento para meu img.
  // referenciando diretamente o elemento HTML img, para atualizálo sem envolver o ciclo de vida do React
  const imageRef = useRef<HTMLImageElement | null>(null);
  // guardo somente a parte semelhante entre as urls necessárias
  const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  const handleIsback = () => {
    // mudo o valor referente interno atual da variável com track no ref (sem necessidade de mudança externa de estadp)
    isBackRef.current = !isBackRef.current;
    if (imageRef.current) {
      // Dessa forma decido qual será o final complementar da URL baseado se queremos ver o back ou não
      const imageUrl = isBackRef.current
        ? `${baseUrl}back/25.png`
        : `${baseUrl}25.png`;
      
      // troco o src interno do componente imageRef, já que está trackeado pelo useRef
      // pelo imageUrl resultante do if anterior (back ou não)
      imageRef.current.src = imageUrl;
    }
  };

  return (
    <>
      <img 
        ref={imageRef} 
        src={`${baseUrl}25.png`} 
        alt="PokemonImage" 
      />
      <button onClick={handleIsback}>Trocar</button>
    </>
  );
};

export { Questao02 };
