import { useState } from "react";
import Card from "../Card";

function Projects() {
  const [turma, setTurma] = useState([
    {
      dev: "Andrea",
      game: "Show do milhão",
      status: "reprovado",
      deploy: "",
      slide: "",
      github: "",
    },
    {
      dev: "Fabio",
      game: "Jokenpo",
      status: "aprovado",
      deploy: "",
      github: "",
      slide: "",
    },
    {
      dev: "Vitor",
      game: "Short Cuts",
      status: "aprovado",
      deploy: "",
      slide: "",
      github: "",
    },
    {
      dev: "Bruno",
      game: "Sudoku",
      status: "aprovado",
      deploy: "",
      github: "",
      slide: "",
    },
    {
      dev: "Tami",
      game: "Ache o gato",
      status: "aprovado",
      deploy: "",
      slide: "",
      github: "",
    },
  ]);

  const vitor = useState();

  console.log(vitor);

  return (
    <>
      {turma.map((element) => {
        return <Card project={element} key={element.dev} />;
      })}
    </>
  );
}

export default Projects;
