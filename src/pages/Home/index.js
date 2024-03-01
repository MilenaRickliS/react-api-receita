import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    function carregaDados() {
      let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setFilmes(json.meals);
        })
        .catch((error) => {
          toast.error("Erro ao buscar filmes");
        });
    }

    carregaDados();
  }, []);

  return (
    <div className="container">
      {Array.isArray(filmes) &&
        filmes.map((item) => {
          return (
            <article className="post" key={item.idMeal}>
              <strong className="nome">{item.strMeal}</strong>
              <img className="foto" src={item.strMealThumb} />
              <a>
                <Link to={`/detalhes/${item.idMeal}`} className="botao">
                  Acessar
                </Link>
              </a>
            </article>
          );
        })}
    </div>
  );
}

export default Home;