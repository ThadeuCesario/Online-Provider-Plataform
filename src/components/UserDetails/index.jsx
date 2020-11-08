import React, { useState, useEffect } from "react";
import apiService from "../../services/api";
import { IconName } from "react-icons/fi";
import "./styles.css";

const UserDetails = props => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiService.get("?results=10");
      if (response.status >= 200 && response.status < 300 && response.data) {
        setUsers(response.data?.results);
      } else {
        /* Não é interessante mostrar alerta dessa forma para o usuário, porque prejudica a UX. Mas é só um   exemplo. */
        alert(
          `Falha na requisição dos usuários. Código de retorno: ${
            response.status
          }`
        );
      }
    } catch (error) {
      alert(
        `Falha na requisição dos usuários. Código de retorno: ${
          response.status
        }`
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return users.map(user => {
    const { picture, name, email, phone, location } = user;
    const { large } = picture;
    const { title, first, last } = name;
    const { street, city } = location;
    const { number, name: nameStreet } = street;
    return (
      <article className="user-container">
        <div className="cardHeader">
          <div className="nameUser">
            <strong>{`${title}. `}</strong>
            <strong>{`${first} ${last}`}</strong>
          </div>
          <img src={large} alt="UserPhoto" className="userPhoto" />
        </div>
        <div className="cardDetails">
          <span>{`Olá! Meu nome é ${first} ${last}.`}</span>
          <br />
          <span>{`Sou front-end aproximadamente 5 anos.`}</span> <br />
          <span>{`Moro atualmente na ${nameStreet}, ${number} - ${city}`}</span>{" "}
          <br />
          <span>{`Ficarei muito feliz em te ajudar, entre em contato comigo pelo telefone: ${phone} ou pelo e-mail: ${email}.`}</span>
          <br />
        </div>
      </article>
    );
  });
};

export default UserDetails;
