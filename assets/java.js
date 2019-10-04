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
  if (btnText.innerHTML === "More Info") {
    amznCard.style.display = "inline-block";
    amznCard.style.float = "right";
    amznCard.style.position = "relative";
    amznCard.style.top = "50px";
    amznCard.style.right = "10%";
    grCard.style.display = "inline-block";
    grCard.style.position = "relative";
    grCard.style.top = "58px";
    grCard.style.left = "10%";
    grCard.style.marginTop = "0";
    grCard.style.marginRight = "200px";
    btnText.innerHTML = "Hide Data";
  } else {
    amznCard.style.display = "none";
    btnText.innerHTML = "More Info";
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
    var title = $('#userInput').val();
    $.ajax({
      url: api_url + "?key=" + key + " &title=" + title
    }).then(function (response) {
      console.log(response);
      $(".card-content").html(response);
    })

  });


  //chase end


  function showSimilar() {
      
    var smCard = document.getElementById("card2");
    var simiCard = document.getElementById("card3");
    var btnText = document.getElementById("similar");
    console.log(simiCard);
  //change dots to amazon card selector name
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

