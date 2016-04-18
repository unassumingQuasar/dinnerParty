var Sequelize = require('sequelize');
var db = require('../config/init.js');
var each = require('async-each');
var _ = require('underscore');
var axios = require('axios');




var ingredients = [
'hazelnuts',
'turkey',
'peppers',
'parsley',
'quinoa',
'pork',
'lemon',
'tomato',
'zucchini',
'spinach',
'peanuts',
'cabbage',
'mozzarella',
'walnuts',
'cabbage',
'tofu',
'almonds',
'arugula',
'cheese',
'garlic',
'eggplant',
'cheese',
'asparagus',
'lentils',
'leeks',
'egg',
'cauliflower',
'chicken',
'eggplant',
'avocado',
'bacon',
'onion',
'carrots',
'apples',
'peas'];

var body = {
    "count": 30,
    "recipes": [
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/ccaf14",
            "title": "Watermelon Pico de Gallo",
            "source_url": "http://thepioneerwoman.com/cooking/2013/06/watermelon-pico-de-gallo/",
            "recipe_id": "ccaf14",
            "image_url": "http://static.food2fork.com/watermelon12a75.jpg",
            "social_rank": 99.99999999999444,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "Epicurious",
            "f2f_url": "http://food2fork.com/view/7266df",
            "title": "Watermelon Margarita Ice Pops",
            "source_url": "http://www.epicurious.com/recipes/food/views/Watermelon-Margarita-Ice-Pops-354221",
            "recipe_id": "7266df",
            "image_url": "http://static.food2fork.com/3542210260.jpg",
            "social_rank": 99.99999999980811,
            "publisher_url": "http://www.epicurious.com"
        },
        {
            "publisher": "Bon Appetit",
            "f2f_url": "http://food2fork.com/view/49085",
            "title": "Watermelon Soda Float",
            "source_url": "http://www.bonappetit.com/recipes/quick-recipes/2012/09/watermelon-soda-float",
            "recipe_id": "49085",
            "image_url": "http://static.food2fork.com/watermelonsodafloat6467c3f.jpg",
            "social_rank": 99.99975800028331,
            "publisher_url": "http://www.bonappetit.com"
        },
        {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/80bdf9",
            "title": "Watermelon Margarita Recipe",
            "source_url": "http://www.chow.com/recipes/30705-watermelon-margarita",
            "recipe_id": "80bdf9",
            "image_url": "http://static.food2fork.com/30705_RecipeImage_620x413_watermellon_margaritae2e9.jpg",
            "social_rank": 99.99890065566379,
            "publisher_url": "http://www.chow.com"
        },
        {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/d40954",
            "title": "Summer Hoedown Recipe",
            "source_url": "http://www.chow.com/recipes/29938-summer-hoedown",
            "recipe_id": "d40954",
            "image_url": "http://static.food2fork.com/29938_summer_hoedown_6205df5.jpg",
            "social_rank": 99.9935407769773,
            "publisher_url": "http://www.chow.com"
        },
        {
            "publisher": "101 Cookbooks",
            "f2f_url": "http://food2fork.com/view/47870",
            "title": "Tortilla Salad",
            "source_url": "http://www.101cookbooks.com/archives/tortilla-salad-recipe.html",
            "recipe_id": "47870",
            "image_url": "http://static.food2fork.com/tortilla_salad_recipeddda.jpg",
            "social_rank": 99.99266814080003,
            "publisher_url": "http://www.101cookbooks.com"
        },
        {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/e66564",
            "title": "Watermelon Lemonade Cocktail Recipe",
            "source_url": "http://www.chow.com/recipes/10549-watermelon-lemonade",
            "recipe_id": "e66564",
            "image_url": "http://static.food2fork.com/10549_RecipeImage_620x413_watermelon_lemonade_cocktail9f42.jpg",
            "social_rank": 99.99066156230933,
            "publisher_url": "http://www.chow.com"
        },
        {
            "publisher": "Epicurious",
            "f2f_url": "http://food2fork.com/view/dac642",
            "title": "Tomato and Watermelon Salad",
            "source_url": "http://www.epicurious.com/recipes/food/views/Tomato-and-Watermelon-Salad-352389",
            "recipe_id": "dac642",
            "image_url": "http://static.food2fork.com/352389b99f.jpg",
            "social_rank": 99.98813555265303,
            "publisher_url": "http://www.epicurious.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/34209",
            "title": "Watermelon Cooler Slushy",
            "source_url": "http://allrecipes.com/Recipe/Watermelon-Cooler-Slushy/Detail.aspx",
            "recipe_id": "34209",
            "image_url": "http://static.food2fork.com/247594cb43.jpg",
            "social_rank": 99.98133552156719,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/47013",
            "title": "Watermelon Granita",
            "source_url": "http://thepioneerwoman.com/cooking/2011/07/watermelon-granita/",
            "recipe_id": "47013",
            "image_url": "http://static.food2fork.com/granita9fc1.jpg",
            "social_rank": 99.9165865854107,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "Bunky Cooks",
            "f2f_url": "http://food2fork.com/view/e3ce90",
            "title": "Watermelon Martinis",
            "source_url": "http://www.bunkycooks.com/2010/08/watermelon-martinis-oh-sweet-sugar-baby/",
            "recipe_id": "e3ce90",
            "image_url": "http://static.food2fork.com/SugarBabyWatermelon1of119309.jpg",
            "social_rank": 99.89076271533968,
            "publisher_url": "http://www.bunkycooks.com"
        },
        {
            "publisher": "A Spicy Perspective",
            "f2f_url": "http://food2fork.com/view/73edb8",
            "title": "Gin Cocktail ~ Watermelon Basil Bramble Cocktail",
            "source_url": "http://www.aspicyperspective.com/2012/08/gin-cocktail-watermelon.html",
            "recipe_id": "73edb8",
            "image_url": "http://static.food2fork.com/IMG_5519180x180673a.jpg",
            "social_rank": 99.7132927418048,
            "publisher_url": "http://www.aspicyperspective.com"
        },
        {
            "publisher": "Epicurious",
            "f2f_url": "http://food2fork.com/view/ed2ddf",
            "title": "Watermelon, Feta, and Arugula Salad with Balsamic Glaze",
            "source_url": "http://www.epicurious.com/recipes/food/views/Watermelon-Feta-and-Arugula-Salad-with-Balsamic-Glaze-353890",
            "recipe_id": "ed2ddf",
            "image_url": "http://static.food2fork.com/353890c673.jpg",
            "social_rank": 99.57308565294957,
            "publisher_url": "http://www.epicurious.com"
        },
        {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/6fc2c6",
            "title": "Zapatos Nuevos Recipe",
            "source_url": "http://www.chow.com/recipes/11039-zapatos-nuevos",
            "recipe_id": "6fc2c6",
            "image_url": "http://static.food2fork.com/11039_RecipeImage_620x413_zapatos_nuevos3db1.jpg",
            "social_rank": 99.99763557123761,
            "publisher_url": "http://www.chow.com"
        },
        {
            "publisher": "A Spicy Perspective",
            "f2f_url": "http://food2fork.com/view/e39562",
            "title": "Salsa Verde Burgers with Fontina, Watermelon and Basil",
            "source_url": "http://www.aspicyperspective.com/2011/08/summers-best-burger.html",
            "recipe_id": "e39562",
            "image_url": "http://static.food2fork.com/IMG_89921180x18087a8.jpg",
            "social_rank": 98.96475069180578,
            "publisher_url": "http://www.aspicyperspective.com"
        },
        {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/b54062",
            "title": "Watermelon-Soju Cocktail Recipe",
            "source_url": "http://www.chow.com/recipes/25681-watermelon-soju-cocktail",
            "recipe_id": "b54062",
            "image_url": "http://static.food2fork.com/watermelon_suju_cocktail_60037a8.jpg",
            "social_rank": 98.4964785394012,
            "publisher_url": "http://www.chow.com"
        },
        {
            "publisher": "Food Republic",
            "f2f_url": "http://food2fork.com/view/7602a3",
            "title": "Radish And Citrus Salad With Candied Shallots Recipe",
            "source_url": "http://www.foodrepublic.com/2013/04/25/radish-and-citrus-salad-candied-shallots-recipe",
            "recipe_id": "7602a3",
            "image_url": "http://static.food2fork.com/citrussalad8c6d.jpg",
            "social_rank": 98.33998770169218,
            "publisher_url": "http://www.foodrepublic.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/34232",
            "title": "Watermelon Sangria",
            "source_url": "http://allrecipes.com/Recipe/Watermelon-Sangria/Detail.aspx",
            "recipe_id": "34232",
            "image_url": "http://static.food2fork.com/2505985637.jpg",
            "social_rank": 98.24444383275703,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "Bunky Cooks",
            "f2f_url": "http://food2fork.com/view/e2e176",
            "title": "Watermelon Margarita Popsicles",
            "source_url": "http://www.bunkycooks.com/2011/06/watermelon-margarita-popsicles-for-casual-friday/",
            "recipe_id": "e2e176",
            "image_url": "http://static.food2fork.com/WatermelonMargaritaPopsicles23a79.jpg",
            "social_rank": 98.21040018580943,
            "publisher_url": "http://www.bunkycooks.com"
        },
        {
            "publisher": "Cookie and Kate",
            "f2f_url": "http://food2fork.com/view/8a4c24",
            "title": "All Recipes",
            "source_url": "http://cookieandkate.com/2012/watermelon-juice/",
            "recipe_id": "8a4c24",
            "image_url": "http://static.food2fork.com/watermelonjuice16869.jpg",
            "social_rank": 95.7487862185164,
            "publisher_url": "http://cookieandkate.com"
        },
        {
            "publisher": "Epicurious",
            "f2f_url": "http://food2fork.com/view/cecb59",
            "title": "Autumn Squash Salad",
            "source_url": "http://www.epicurious.com/recipes/food/views/Autumn-Squash-Salad-395571",
            "recipe_id": "cecb59",
            "image_url": "http://static.food2fork.com/395571f392.jpg",
            "social_rank": 94.87597579172848,
            "publisher_url": "http://www.epicurious.com"
        },
        {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/6dbda7",
            "title": "Drunken Watermelon Pops Recipe",
            "source_url": "http://www.chow.com/recipes/11883-drunken-watermelon-pops",
            "recipe_id": "6dbda7",
            "image_url": "http://static.food2fork.com/11883_drunken_watermellon_pops_6005f87.jpg",
            "social_rank": 94.02127615355185,
            "publisher_url": "http://www.chow.com"
        },
        {
            "publisher": "Real Simple",
            "f2f_url": "http://food2fork.com/view/38682",
            "title": "Summer Shrimp Salad",
            "source_url": "http://www.realsimple.com/food-recipes/browse-all-recipes/summer-shrimp-salad-10000001202708/index.html",
            "recipe_id": "38682",
            "image_url": "http://static.food2fork.com/summershrimpsalad_30038a8e159.jpg",
            "social_rank": 93.84855864846779,
            "publisher_url": "http://realsimple.com"
        },
        {
            "publisher": "Epicurious",
            "f2f_url": "http://food2fork.com/view/a46d2a",
            "title": "Stone Fruit Gazpacho with Scallops",
            "source_url": "http://www.epicurious.com/recipes/food/views/Stone-Fruit-Gazpacho-with-Scallops-395553",
            "recipe_id": "a46d2a",
            "image_url": "http://static.food2fork.com/395553d18a.jpg",
            "social_rank": 93.0677527069888,
            "publisher_url": "http://www.epicurious.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/34204",
            "title": "Watermelon and Strawberry Lemonade",
            "source_url": "http://allrecipes.com/Recipe/Watermelon-And-Strawberry-Lemonade/Detail.aspx",
            "recipe_id": "34204",
            "image_url": "http://static.food2fork.com/224296ce5f.jpg",
            "social_rank": 92.38071919277368,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/34238",
            "title": "Watermelon Vodka Slush",
            "source_url": "http://allrecipes.com/Recipe/Watermelon-Vodka-Slush/Detail.aspx",
            "recipe_id": "34238",
            "image_url": "http://static.food2fork.com/142705f16.jpg",
            "social_rank": 92.36796706935641,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "All Recipes",
            "f2f_url": "http://food2fork.com/view/34211",
            "title": "Watermelon Fire and Ice Salsa",
            "source_url": "http://allrecipes.com/Recipe/Watermelon-Fire-And-Ice-Salsa/Detail.aspx",
            "recipe_id": "34211",
            "image_url": "http://static.food2fork.com/66556526b1.jpg",
            "social_rank": 92.10509138483928,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "Bon Appetit",
            "f2f_url": "http://food2fork.com/view/50086",
            "title": "Watermelon Granita",
            "source_url": "http://www.bonappetit.com/recipes/2011/06/watermelon-granita",
            "recipe_id": "50086",
            "image_url": "http://static.food2fork.com/marewatermelongranitav9de3.jpg",
            "social_rank": 91.90419911132116,
            "publisher_url": "http://www.bonappetit.com"
        },
        {
            "publisher": "BBC Good Food",
            "f2f_url": "http://food2fork.com/view/77b706",
            "title": "Watermelon, prawn & avocado salad",
            "source_url": "http://www.bbcgoodfood.com/recipes/681659/watermelon-prawn-and-avocado-salad",
            "recipe_id": "77b706",
            "image_url": "http://static.food2fork.com/681659_MEDIUMfdbc.jpg",
            "social_rank": 90.59722080394438,
            "publisher_url": "http://www.bbcgoodfood.com"
        },
        {
            "publisher": "Chow",
            "f2f_url": "http://food2fork.com/view/41432c",
            "title": "Watermelon, Tomato, and Kalamata Olive Salad Recipe",
            "source_url": "http://www.chow.com/recipes/10989-watermelon-tomato-and-kalamata-olive-salad",
            "recipe_id": "41432c",
            "image_url": "http://static.food2fork.com/10989_RecipeImage_620x413_watermelon_tomato_olive_salad24d13.jpg",
            "social_rank": 89.6410725334528,
            "publisher_url": "http://www.chow.com"
        }
    ]
};
console.log("WEAWEWAEWEWEWWWW");


// each(ingredients,function(ingredient,topNext){
//   console.log(ingredient);
//   axios.get('http://food2fork.com/api/search?key={instert API key}='+ingredients[0])
//       .then(function(res){
//         console.log(res);
//         var recipes = _.map(res.data.recipes, function(recipe, index){
//           console.log(recipe);
//         return {
//               'name': recipe.title,
//               'ingredient': ingredient,
//               'recipeUrl' : recipe.source_url,
//               'index' : index
//                 };
//         });
//         each(recipes, function(recipe,next){
//           console.log(recipe);
//           db.Recipe.create(recipe,function(Savedrecipe){
//             next();
//             console.log(savedRecipe);
//           });
//         });
//       });
//   topNext();
// });


module.exports = ingredients;
