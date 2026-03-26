# Recipe Skill

A skill for finding, creating, tweaking, and managing recipes. Use the `webfetch` tool to search TheMealDB for real recipes. Key API endpoints:

- Search by name: `https://www.themealdb.com/api/json/v1/1/search.php?s={name}`
- Random recipe: `https://www.themealdb.com/api/json/v1/1/random.php`
- By category: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- By ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`

The API returns JSON with `meals` array. Each meal has: `strMeal` (name), `strCategory`, `strArea` (cuisine), `strInstructions`, `strMealThumb` (image URL), and ingredient/measure pairs `strIngredient1`–`strIngredient20` with `strMeasure1`–`strMeasure20`.

When presenting a recipe, format it clearly: recipe name and cuisine, ingredient list with measurements, and numbered cooking steps. For dietary modifications and creative recipe requests that aren't in the database, fall back to your culinary knowledge.

## Examples

- "Give me a recipe for chocolate chip cookies."
- "How do I make lasagna healthier?"
- "Tweak this chicken curry recipe to be vegan."
- "Suggest a dinner recipe using salmon and spinach."
- "What's a good gluten-free substitute for flour in bread?"
- "Can you provide a 30-minute meal idea for four people?"
- "Make this pancake recipe dairy-free."
- "Show me how to cook a perfect medium-rare steak."
- "I need a low-carb version of spaghetti bolognese."
- "What can I cook with leftover rotisserie chicken?"
- "Give me a random recipe"
- "Find me a seafood recipe"
