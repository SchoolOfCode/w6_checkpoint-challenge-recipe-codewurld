let foodToSearch = null;
let recipeName1 = document.getElementById("recipe-label1")
let recipeName2 = document.getElementById("recipe-label2")
let recipeName3 = document.getElementById("recipe-label3")


const recipeImage1 = document.getElementById("recipe-image1");
const recipeImage2 = document.getElementById("recipe-image2");
const recipeImage3 = document.getElementById("recipe-image3");
const ingredientList = document.querySelector(".ingredient-list");
const app_id = "15c0d31e";
const app_key = "9af0773fe4102ac2e16c19db8990c62d";
const weatherAppKey = "NtgltbITXqmJ0iwr9wThjssm9I3ONv7a";

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---

  const interpolatedRecipe = `https://api.edamam.com/search?q=${food}&app_id=${app_id}&app_key=${app_key}`

  // gives us an object 
  // console.log({ interpolatedRecipe, rawRecipe });

  const getRecipe = await fetch(interpolatedRecipe);
  let response = await getRecipe.json();

  // console.log(response);
  // console.log(response.hits[0].recipe.url);
  // for (let i = 0; i < response.length; i++) {
  //   console.log(response[i].recipe);
  // }
  recipeName1.innerHTML = response.hits[0].recipe.label;
  recipeName1.href = response.hits[0].recipe.url;
  recipeImage1.src = response.hits[0].recipe.image;

  recipeName2.innerHTML = response.hits[1].recipe.label;
  recipeName2.href = response.hits[1].recipe.url;
  recipeImage2.src = response.hits[1].recipe.image;

  recipeName3.innerHTML = response.hits[2].recipe.label;
  recipeName3.href = response.hits[2].recipe.url;
  recipeImage3.src = response.hits[2].recipe.image;

  //--- write your code above ---
}

fetchRecipe();

// async function getSpotifyPlaylist(playlist) {
//   const getPlaylist = await fetch("https://api.spotify.com/v1/playlists/{playlist_id}");
//   const response = await getPlaylist.json();
//   console.log(response);
//   // document.getElementById("music-playlist").innerHTML = response;

// }

// async function getCurrentWeather(location) {
//   const getWeather = `https://data.climacell.co/v4/timelines?apikey=${weatherAppKey}&location=${location}&startTime={{startTime}}&endTime={{endTime}}&timezone={{timezone}}`

//   const getLocationWeather = await fetch(getWeather);
//   const response = await getLocationWeather.json();

//   console.log(response);
  // document.getElementById("music-playlist").innerHTML = response;

  // document.getElementById("current-weather").innerHTML = response



// }

// getCurrentWeather();