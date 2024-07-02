import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipes, getSingleRecipe, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { localUpload } from "../middlewares/upload.js";

// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', localUpload.single('image'), postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getSingleRecipe);

// recipeRouter.patch('/recipes/:id', patchRecipeById);

// Export router
export default recipeRouter;