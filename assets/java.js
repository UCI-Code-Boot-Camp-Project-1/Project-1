//this function displays more text on the Goodreads card for book summary
//chase start

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
  //this function displays the amazon card and moves the goodreads more to the left
}
function showAMZNcard() {
  //replace #dots with amazon card selector
  var grCard = document.getElementById("card1");
  var amznCard = document.getElementById("card2");
  var btnText = document.getElementById("moreInfo");
  console.log(amznCard);
  //change dots to amazon card selector name
  if (btnText.innerHTML === "Purchase Options") {
    amznCard.style.display = "inline-block";
    amznCard.style.float = "right";
    amznCard.style.position = "relative";
    amznCard.style.top = "8px";
    amznCard.style.right = "5%";
    grCard.style.display = "inline-block";
    grCard.style.position = "relative";
    grCard.style.top = "58px";
    grCard.style.left = "10%";
    grCard.style.marginTop = "0";
    grCard.style.marginRight = "200px";
    btnText.innerHTML = "Hide Data";
  } else {
    amznCard.style.display = "none";
    btnText.innerHTML = "Purchase Options";
  }
}
function showReview() {
  //var reviewBtn = $("#addReview").text();
  //change button text
  var btnText = document.getElementById("addReview");
  btnText.innerHTML = "Add Review";
  //add review
  var reviewsContainer = $(".reviewDivs");
  var newReview = $("<div>");
  //add the review content into this div
  newReview.html("review stuff in here");
  reviewsContainer.prepend(newReview);

}




var api_url = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/title.json';
var key = 'SEPM2Q5MttLZl5zK40A';

$(".search-button").click(function (event) {
  event.preventDefault();
  $("#card1").toggle();
  var title = $('#userInput').val();
  $.ajax({
    url: api_url + "?key=" + key + " &title=" + title
  }).then(function (response) {
    $(".card-content").html(response.reviews_widget);
  })
  secondAjax(title);
});


//chase end


function showSimilar() {

  var smCard = document.getElementById("card2");
  var simiCard = document.getElementById("card3");
  var btnText = document.getElementById("similar");
  console.log(simiCard);
  if (btnText.innerHTML === "Show Similar") {
    simiCard.style.display = "inline-block";
    simiCard.style.float = "bottom";
    simiCard.style.position = "relative";
    simiCard.style.top = "50px";
    simiCard.style.left = "32%";
    btnText.innerHTML = "Show/Hide";
  } else {
    simiCard.style.display = "none";
    btnText.innerHTML = "Show Similar";
  }
}

function secondAjax(title) {
var api_url = 'https://www.googleapis.com/books/v1/volumes?';
var key = 'AIzaSyBGKO8aYajM4ddgVf9F5-HQ5QCYxr5ZBas';
  
  $.ajax({
    url: api_url + "q=+intitle:" + title + "&key=" + key,
  }).then(function (response) {
    console.log(response);
    $(".booktitle").html((response.items[0].volumeInfo.title));
    $("#avgRating").html((response.items[0].volumeInfo.averageRating));
    $("#summary").html((response.items[0].volumeInfo.description));
    $("#bookIMG").attr("src", response.items[0].volumeInfo.imageLinks.smallThumbnail);
    $(".author").html((response.items[0].volumeInfo.authors[0]));
    $("#pageCount").html((response.items[0].volumeInfo.pageCount));
    $("#ratings").html((response.items[0].volumeInfo.ratingsCount));
    $(".retailPrice").html(response.items[0].saleInfo.retailPrice.amount)
    $("#buyLink").html(response.items[0].saleInfo.buyLink)
    $('#buyLink').attr('href', response.items[0].saleInfo.buyLink)
  });

}
