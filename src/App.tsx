import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

interface MeuObjeto {
  e: string;
  target: string;
}

export function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps | undefined>(
    undefined
  );

  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    });
  }

  /*   function soma() {
    setContador(anterior => {
      return anterior + 1;
    });
  }
  function subtrai() {
    setContador(anterior => {
      return anterior - 1;
    });
  } */

  // Melhorando ou PIORANDO:
  function somaOuSubtrai(e: MeuObjeto) {
    console.log(e);
    return e.target === "+"
      ? setContador(prev => prev + 1)
      : setContador(prev => prev - 1);
  }

  return (
    <div>
      <h1>Conhecendo useState</h1>
      <input
        placeholder="Digite o nome"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <br /> <br />
      <input
        placeholder="Digite a idade"
        value={idade}
        onChange={e => setIdade(e.target.value)}
      />
      <br /> <br />
      <button onClick={mostrarAluno}>Mostrar aluno</button>
      <hr />
      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h4>Idade: {infoAluno?.idade}</h4>
      <hr />
      <br />
      <h1>Contador com useState</h1>
      <button onClick={() => somaOuSubtrai({ e: "", target: "+" })}>
        +
      </button>{" "}
      {contador}{" "}
      <button onClick={() => somaOuSubtrai({ e: "", target: "-" })}>-</button>
    </div>
  );
}
