"use strict";




/** Use form entry to search on giphy api. No input,
 * Add the image of first search to the DOM
*/

async function getGiphyForSearchAndAddImage(evt) {
  evt.preventDefault();

  const searchInput = $("input").val();
  const params = new URLSearchParams({
    q: searchInput, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

  const searchResult = await response.json();
  addImage(searchResult);
  // console.log("giphyResponse=", response, "json=", searchResult);
}


/** Taking in image result from server and adding it onto the DOM */

function addImage(searchResult) {
  // get first image result from response
  const firstImageResult = searchResult.data[0].images.fixed_height.url;
  console.log('first image result:', firstImageResult);

  // add image to DOM
  const $newImage = $('<img>').attr('src', firstImageResult);
  $('#images').append($newImage);
}

/** Remove all images from the section */

function removeAllImages(evt) {
  evt.preventDefault();
  $('section').empty();
}

console.log("Let's get this party started!");
$("#search-button").on("click", getGiphyForSearchAndAddImage);
$("#remove-images-button").on("click", removeAllImages);
