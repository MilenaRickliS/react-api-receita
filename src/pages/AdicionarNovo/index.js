//Hooks React
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import { toast } from 'react-toastify'

function AdicionarNovo(){ 
  const [movie, setMovie] = useState([]);  // controlar o estado
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


  const [newPost, setNewPost] = useState({
    nome: '',
    sinopse: '',
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovie([...movie, newPost]);
    // add API call here to update the recipe API
    console.log('New recipe added:', newPost);
    setNewPost({
      nome: '',
      modoP: '',
      ingredientes: ''
    });
  };
  

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <label>
                Nome da receita:
                <input
                name='nome'
                type="text"
                value={newPost.nome}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Modo de Preparo:
                <input
                name='modoP'
                type="text"
                value={newPost.modoP}
                onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Ingredientes(minimo 3):
                <input
                name='ingredientes'
                type="text"
                value={newPost.ingredientes}
                onChange={handleChange}
                />
            </label>
            <button type="submit" className="area">Adicionar Receita</button>
        </form>
        <article className="post">
        <h1>Minhas Receitas</h1>
        {filmes.map((item) => { //percorrendo a api
        return(
          <article className="meusfilmes" key={item.idMeal}>
            <li>{item.strMeal} - {item.strInstructions} - {item.strIngredient1}; {item.strIngredient2}; {item.strIngredient3}</li>
          </article>
        );
      })}
        <ul>
        {movie.map((movie, index) => (
          <li key={index}>
            {movie.nome} - {movie.modoP} - {movie.ingredientes}
          </li>
        ))}
      </ul>
      </article>
    </div>
  );
}
//exportar
export default AdicionarNovo;




  

