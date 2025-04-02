import React, { useState } from "react";
import styles from "./Forms.module.css";
const Forms = ( props ) => {
  const [nome, setNome] = useState(props.nome ?? "");
  const [email, setEmail] = useState(props.email ?? "");
  const [senha, setSenha] = useState(props.senha ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleName = (e) => {
    setNome(e.target.value);
  };

  return (
    <div>
      <h4>Form</h4>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label htmlFor="inp_nome">
          Nome:
          <input
            id="inp_nome"
            type="text"
            name="nome"
            placeholder="Digite seu nome..."
            onChange={handleName}
            value={nome}
          />
        </label>
        <label htmlFor="inp_email">
          <span>Email:</span>
          <input
            type="email"
            id="inp_email"
            placeholder="Digite seu email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            value={senha}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Forms;
