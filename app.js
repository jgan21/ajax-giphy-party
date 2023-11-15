"use strict";


$("button").on("click", getGiphyForSearch);

async function getGiphyForSearch(evt){
  evt.preventDefault();

  const searchInput = $("input").val();
  const params = new URLSearchParams({
      q:searchInput, api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"})

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?${params}`,
      {method: "GET",
      headers: {
        "Content-Type": "application/json"}
      });
  const searchResult = await response.text();

  console.log("giphyResponse=", response, "text=", searchResult);
}

// https://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

console.log("Let's get this party started!");