import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

  function mostrarAluno() {
    setInfoAluno({
      nome: input,
      idade: idade,
    });
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
    </div>
  );
}
