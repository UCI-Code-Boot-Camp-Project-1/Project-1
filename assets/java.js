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
   var reviewsContainer=$(".reviewDivs");
   var newReview=$("<div>");
   //add the review content into this div
   newReview.html("review stuff in here");
   reviewsContainer.prepend(newReview);
   
  }
  //chase end