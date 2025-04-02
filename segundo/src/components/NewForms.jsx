import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Forms.module.css";

const NewForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {};

  const onError = (errors) => {};

  return (
    <div>
      <h4>Form</h4>
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label htmlFor="inp_nome">
          Nome:
          <input
            id="inp_nome"
            type="text"
            name="nome"
            placeholder="Digite seu nome..."
            {...register("nome", {
              required: "O nome é obrigatório",
              minLength: {
                value: 3,
                message: "O nome deve ter no mínimo 3"
              },
              maxLength: {
                value: 10,
                message: "O nome deve ter pelo até 20 caracteres"
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "O nome só pode conter letrar",
              }
            })}
          />
          {errors.nome && <p>{errors.nome.message}</p>}
        </label>
        <label htmlFor="inp_email">
          <span>Email:</span>
          <input
            type="email"
            id="inp_email"
            placeholder="Digite seu email..."
            {...register("email", { 
                required: "O email é obrigatório", 
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                    message: "Email inválido",
                }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            {...register("senha", { required: true,
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Senha inválida",
                }
             })}
          />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            name="password"
            {...register("senha", { 
                required: true,
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Senha inválida",
                }
             })}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default NewForms;
