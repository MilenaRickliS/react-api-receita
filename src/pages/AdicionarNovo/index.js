/*//Hooks React
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
export default AdicionarNovo;*/
import React, { useState } from 'react';
import axios from 'axios';

function AdicionarNovo(){
const AddRecipe = () => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    area: '',
    instructions: '',
  });

  const [recipes, setRecipes] = useState([]);
};
const handleInputChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${form.name}`
    );

    if (response.data.meals && response.data.meals.length > 0) {
      setRecipes([...recipes, ...response.data.meals]);
      setForm({
        name: '',
        category: '',
        area: '',
        instructions: '',
      });
    } else {
      alert('Receita não encontrada.');
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    alert('Ocorreu um erro ao buscar a receita.');
  }
};

return (
  <div>
    <h1>Adicionar Receita</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Categoria:
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Área:
        <input
          type="text"
          name="area"
          value={form.area}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Instruções:
        <textarea
          name="instructions"
          value={form.instructions}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Adicionar</button>
    </form>
    <h2>Lista de Receitas</h2>
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <h3>{recipe.strMeal}</h3>
          <p>{recipe.strInstructions}</p>
        </li>
      ))}
    </ul>
  </div>
);
}

export default AdicionarNovo;  

