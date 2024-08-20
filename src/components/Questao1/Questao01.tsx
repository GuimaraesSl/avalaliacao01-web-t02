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
      <Questao01B lista={lista}/>
    </>
  )
}

function Questao01B(props : {lista: ListaType[]}) {

  return (
    <>
      <div>Questao01B...</div>
      {
        props.lista.map((maior, index) => {
          const bigest = Math.max(maior.a, maior.b, maior.c)
          return <div key={index} style={{marginBottom: "10px"}}>{JSON.stringify(maior)} : {bigest}</div>
        })
      }
    </>
  )
}

export {Questao01A, Questao01B}

