import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import SuggestedRecipe from "./SuggestedRecipe";

export const MainContent = () => {
  // const retrievedIngredient = JSON.parse(localStorage.getItem("ingredients"))
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false)

  const formik = useFormik({
    initialValues: {
      ingredient: "",
    },
    validationSchema: Yup.object({
      ingredient: Yup.string().required("Please enter an ingredient"),
    }),
    onSubmit: (values, { resetForm }) => {
      setIngredients([...ingredients, values.ingredient]); // Add the ingredient
      resetForm(); // Clear the input field
    },
  });

  // useEffect(() => {
  //   localStorage.setItem("ingredients", JSON.stringify(ingredients))
  // }, [ingredients])

  const handleClick = () => {
    setRecipeShown(prevRecipeShown => !prevRecipeShown)
  }

  return (
    <main>
      <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="ingredient"
          name="ingredient"
          type="text"
          value={formik.values.ingredient}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="e.g. oregano"
        />
        <button type="submit">+ Add Ingredient</button>

      </form>
        {formik.touched.ingredient && formik.errors.ingredient ? (
          <div className="input-error">{formik.errors.ingredient}</div>
        ) : null}
      </div>

      <div className="container">
        <h1>Ingredient on hand:</h1>
        {/* avoid rendering when we don't have any ingredients */}
        {ingredients.length > 0 &&
          <>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            {ingredients.length > 3 && 
              <div className="get-recipe-container">
                <div>
                  <h2>Ready for a recipe? </h2>
                  <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={handleClick}>Get a recipe</button>
              </div>
            } 
          </>
        }

        {recipeShown && 
          <SuggestedRecipe />
        }

      </div>
    </main>
  );
};
