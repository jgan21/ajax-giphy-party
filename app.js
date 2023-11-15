"use strict";


$("#search-button").on("click", getGiphyForSearchAndAddImage);
$("#remove-images-button").on("click", removeAllImages);


/** Use form entry to search on giphy api. No input,
 * Add the image of first search to the DOM
*/

async function getGiphyForSearchAndAddImage(evt){
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
  const searchResult = await response.json();

  // console.log("giphyResponse=", response, "json=", searchResult);

  // get first image result from response
  const firstImageResult = searchResult.data[0].images.fixed_height.url
  console.log('first image result:', firstImageResult);

  // add image to DOM
  const $newImage = $('<img>').attr('src', firstImageResult);
  $('#images').append($newImage);

}

function removeAllImages(evt) {
  evt.preventDefault();
}



console.log("Let's get this party started!");
