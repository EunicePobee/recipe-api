import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipes, getSingleRecipe, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";


// Create router
const recipeRouter = Router();


// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession, remoteUpload.single('image'), postRecipe);

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

recipeRouter.get('/recipes/:id', getSingleRecipe);



// Export router
export default recipeRouter;