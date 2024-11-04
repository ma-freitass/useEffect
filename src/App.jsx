import { useEffect, useState } from "react"
//sempre importar o useeffect

export default function App() {
  //hook são funções prontas do próprio react
  //useEffect usa o () +> {} onde será passada uma função e também recebe um array de dependencias []
  //são 3 coisas que podem ser passadas
  //com apenas a função, ele vai executar assim que o componente for montado, assim que for exibida na tela, para isso deverá ser usado a função e o array, será executado apenas uma vez
  //
  useEffect(() => {
    console.log("Está funcionando")
  }, [])
  //dependencia específica, ou seja somente para um determinado lugar
  const [contador, setContador] = useState(0)
  //toda vez que usar uma função
  useEffect(()=>{
    console.log(`A contagem é: ${contador}`)
  }, [contador])
  //useEffect que se mete sem ser chamado será exibido, não tem controle quando é usado somente a função sem o array
  useEffect(()=> {
    console.log("oi")
  })
  const  [nome, setNome] = useState("Batata")
  return (
    <main>
      <h1>UseEffect</h1>
      <p>Gerenciador de Efeitos Colaterais</p>
      <h3>{contador}</h3>
      <button onClick={()=> setContador(contador+1)}>Incrementar</button>
      <p>{nome}</p>
      <button onClick={()=>setNome("Pré treino")}>trocar nome</button>
    </main>
  )
}