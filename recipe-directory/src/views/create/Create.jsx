import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Create.css';

const Create = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    method: '',
    cookingTime: '',
    ingredients: [],
  });
  const [newIngredient, setNewIngrediet] = useState('');
  const ingredientInput = useRef(null);
  const { postData, data, error } = useFetch(
    'http://localhost:3000/recipes',
    'POST'
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // json-server adds automagically new ID
    postData({
      ...recipe,
      cookingTime: `${recipe.cookingTime} minutes`,
    });

    setRecipe({
      title: '',
      method: '',
      cookingTime: '',
      ingredients: [],
    });
  };

  // Navigate user to / qhen we get data response
  useEffect(() => {
    if (data && !error) {
      navigate('/');
    }
  }, [data, navigate, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => {
      return {
        ...prevRecipe,
        [name]: value,
      };
    });
  };

  const handleAdd = () => {
    const ing = newIngredient.trim();

    if (ing && !recipe.ingredients.includes(ing)) {
      setRecipe((prevRecipe) => {
        return {
          ...prevRecipe,
          ingredients: [...prevRecipe.ingredients, newIngredient],
        };
      });
    }

    setNewIngrediet('');
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            placeholder="Recipe Title"
            onChange={handleChange}
            name="title"
            value={recipe.title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              placeholder="New Ingredient"
              onChange={(e) => setNewIngrediet(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button type="button" className="btn" onClick={handleAdd}>
              add
            </button>
          </div>
        </label>

        <p>
          Current ingredients:{' '}
          {recipe.ingredients?.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <input
            type="text"
            placeholder="Recipe Method"
            onChange={handleChange}
            name="method"
            value={recipe.method}
            required
          />
        </label>

        <label>
          <span>Cooking Time(min):</span>
          <input
            type="number"
            placeholder="Cooking Time"
            onChange={handleChange}
            name="cookingTime"
            value={recipe.cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
