import { useRef } from "react";

const Questao02 = () => {
  const isBackRef = useRef(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  const handleIsback = () => {
    isBackRef.current = !isBackRef.current;
    if (imageRef.current) {
      const imageUrl = isBackRef.current
        ? `${baseUrl}back/25.png`
        : `${baseUrl}25.png`;
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
