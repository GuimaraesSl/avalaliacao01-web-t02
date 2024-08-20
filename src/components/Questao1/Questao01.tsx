type ListaType = {
  a: number,
  b: number,
  c: number
}

const Questao01A = () => {

  const lista: ListaType[] = [
    { a: 1, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40},
  ]

  return (
    <>
      {/* Mostrando componente B no componente A e passando a lista criada para B*/}
      <Questao01B lista={lista}/>
    </>
  )
}

function Questao01B(props : {lista: ListaType[]}) {

  return (
    <>
      <div>Questao01B...</div>
      {
        // Mapeio cada componente da lista recebida de A
        props.lista.map((maior, index) => {
          // Usa a biblioteca Math para pegar o maior valor entre os 3 presentes em cada objeto da lista
          const bigest = Math.max(maior.a, maior.b, maior.c)
          return <div key={index} style={{marginBottom: "10px"}}>{JSON.stringify(maior)} : {bigest}</div>
        })
      }
    </>
  )
}

export {Questao01A, Questao01B}

