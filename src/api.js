const API_KEY = '99332e3f-87af-4409-b742-08afad63177c';
const BASE_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';

// Centralized error handler
function handleApiError(error) {
  console.error('API Error:', error);
  throw new Error('Something went wrong. Please try again later.');
}

// Fetch recipes based on a query
export async function fetchRecipes(query) {
  try {
    const response = await fetch(`${BASE_URL}?search=${query}&key=${API_KEY}`);
    const data = await response.json();
    if (data.status !== 'success' || !data.data?.recipes) {
      throw new Error('No recipes found');
    }
    return data.data.recipes;
  } catch (error) {
    handleApiError(error);
  }
}

// Fetch detailed information about a specific recipe
export async function fetchRecipeDetails(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);
    const data = await response.json();
    if (data.status !== 'success' || !data.data?.recipe) {
      throw new Error('Failed to fetch recipe details');
    }
    return data.data.recipe;
  } catch (error) {
    handleApiError(error);
  }
}