"use strict";


/** Use form entry to search on giphy api. No input,
 * return the searched image.
*/
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const GIPHY_URL = "https://api.giphy.com/v1/gifs";

async function getGiphyFromSearch() {
  console.log("started");
  const searchInput = $("input").val();
  const params = new URLSearchParams({
    q: searchInput, api_key: API_KEY
  });

  const response = await fetch(
    `${GIPHY_URL}/search?${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

  const searchResult = await response.json();
  // get first image result from response
  const firstImageResult = searchResult.data[0].images.fixed_height.url;
  console.log('first image result:', firstImageResult);
  return firstImageResult;
}


/** Taking in image result from server and adding it onto the DOM */

function addImage(firstImageResult) {

  // add image to DOM
  const $newImage = $('<img>').attr('src', firstImageResult);
  $('#images').append($newImage);
}

/** Remove all images from the section */

function removeAllImages() {
  $('section').empty();
}

/** Conductor function - will began running the gif search */

async function handleSubmit(evt) {
  evt.preventDefault();

  const firstImageResult = await getGiphyFromSearch();
  console.log("image=", firstImageResult);

  addImage(firstImageResult);
}

console.log("Let's get this party started!");
$("#search-button").on("click", handleSubmit);
$("#remove-images-button").on("click", removeAllImages);
