var searchFormEl = document.querySelector(".btn")
var row = document.querySelector(".row")
var firstSection = document.querySelector("#first-section")
function searchApi(query) {
    var event_url = "https://api.themoviedb.org/3/search/multi?api_key=d42525da8940f7a7a298e98a209ec951&language=en-US&query=";
  
    var event_url = event_url + query + "&page=1&include_adult=false" ;
  
  console.log(event_url);
  
    fetch(event_url)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
      })
  
      .then(function (locRes) {
        // write locRes to page so user knows what they are viewing
        row.textContent = locRes.results.length;
        console.log(locRes.results);
        if (!locRes.results.length) {
          console.log('No results found!');
          row.innerHTML = '<h3>No results found, search again!</h3>';
        } else {
            row.textContent = "";
          for (var i = 0; i < locRes.results.length; i++) {
            printResults(locRes.results[i]);
          }
        }
        
      })
      .catch(function (error) {
        console.error(error);
      });
  
  
  }

  function printResults(resultObj) {

    var resultCard = document.createElement('div')
    resultCard.classList.add("col")


    var card1 = document.createElement('div')
    card1.classList.add("card", "h-100")
    resultCard.append(card1)

    var gameThumb = document.createElement('img');
    gameThumb.classList.add("card-img-top")
  

  
    if (resultObj.poster_path) {
        gameThumb.setAttribute("src", "https://image.tmdb.org/t/p/w500" + resultObj.poster_path);
        card1.append(gameThumb);
    }else{
        return 
    }
    var cardBody = document.createElement('div')
    cardBody.classList.add("card-body")
    card1.append(cardBody)

    var cardh1= document.createElement('h1')
    cardh1.classList.add("card-title")
    cardh1.innerHTML = resultObj.original_title
    cardBody.append(cardh1)

    var cardh2= document.createElement('h1')
    cardh2.classList.add("card-title")
    cardh2.innerHTML = resultObj.release_date
    cardBody.append(cardh2)

    var cardText= document.createElement('p')
    cardText.classList.add("card-text")
    cardText.innerHTML = resultObj.overview
    cardBody.append(cardText)
    


      row.append(resultCard)
}

  function handleSearchFormSubmit(event) {
    event.preventDefault();
      firstSection.classList.remove('hidden') 
    var searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal);
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchApi(searchInputVal);
    
  }




var characterImg = ["./assets/img/quen.png", "./assets/img/joker.png", "./assets/img/john-wick.png","./assets/img/themask.png", "./assets/img/james_bond.png", "./assets/img/iron.png",]
var randomImage = characterImg[Math.floor(Math.random()*characterImg.length)]

var img = document.querySelector(".small-img")

var randomImg = document.createElement('img');
randomImg.classList.add("small-screen", "pic-44")
randomImg.setAttribute("src", randomImage)
img.append(randomImg)



const tm = TweenMax;


tm.from(".left-wall", 6,{
    y: "200",
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut,
});

tm.from(".top-walls", 7,{
    y: "-100",
    // x: "-100",
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut,
});


tm.from(".background-text", 9,{
    opacity: 0,
    x: -300,
    delay: 2,
    scale: .5,
    ease: Expo.easeInOut,
});
tm.from(".input-group", 9,{
    opacity: 0,
    delay: 2,
    ease: Expo.easeInOut,
});



tm.to(".pic-4", 2,{
    opacity: 1,
    delay: 1,
    x: -1900,
    display:"none",
    ease: Expo.easeInOut,
});
tm.to(".pic-3", 3,{
    opacity: 1,
    delay: 1.5,
    y: -1900,
    display:"none",
    ease: Expo.easeInOut,
});
tm.to(".pic-2", 4,{
    opacity: 1,
    delay: 2,
    x: 1900,
    display:"none",
    ease: Expo.easeInOut,
});
tm.to(".pic-1", 5,{
    opacity: 1,
    delay: 2.5,
    y: -1900,
    display:"none",
    ease: Expo.easeInOut,
});




tm.from(".pic-44", 8,{
    opacity: 0,
    x: -900,
    delay: 2,
    ease: Expo.easeInOut,
});




searchFormEl.addEventListener("click", handleSearchFormSubmit)
searchFormEl.addEventListener("submit", handleSearchFormSubmit)