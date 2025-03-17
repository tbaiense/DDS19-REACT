import React from "react";

const TemplateExpressions = ( { nome } ) => {

  let aluno = {
    nome: 'Joaquim',
    turma: 'DDS-01',
    curso: 'Desenvolvimento de Sistemas',
  }

  return (
    <div>
      <h1>O nome do melhor do mundo é: {aluno.nome}</h1>
      <p>O nome do aluno é {aluno.nome}, a turma é {aluno.turma} e o curso {aluno.turma}</p>
    </div>
  );
};

export default TemplateExpressions;
