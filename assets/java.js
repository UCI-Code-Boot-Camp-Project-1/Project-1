
//this function displays more text on the Goodreads card for book summary
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
    var dots = document.getElementById("dots");
    var btnText = document.getElementById("moreInfo");
  //change dots to amazon card selector name
    if (btnText.innerHTML === "Minimize") {
     // dots.style.display = "inline";
      btnText.innerHTML = "More Info";
    } else {
      //dots.style.display = "none";
      btnText.innerHTML = "Minimize";
    }
  }