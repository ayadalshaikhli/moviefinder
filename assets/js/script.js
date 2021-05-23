var searchFormEl = document.querySelector(".btn")
var searchSection = document.querySelector("#search-section")
var trendingSection = document.querySelector("#trending-section")
var trendingBtn = document.querySelector("#trending-btn")
var firstSection = document.querySelector("#first-section")
var form = document.querySelector("#form-submit")


// =============
// =======Trending Api
// ===========

function trendingApi() {
    var trending_url = "https://api.themoviedb.org/3/trending/all/week?api_key=d42525da8940f7a7a298e98a209ec951";
  
  
  console.log(trending_url);
  
    fetch(trending_url)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
      })
      .then(function (trending) {
        // write locRes to page so user knows what they are viewing
        trendingSection.textContent = trending.results.length;
        console.log(trending.results);
        if (!trending.results.length) {
          console.log('No results found!');
          trendingSection.innerHTML = '<h3>No results found, search again!</h3>';
        } else {
            trendingSection.textContent = "";
          for (var i = 0; i < trending.results.length; i++) {
            printResultsTrending(trending.results[i]);
          }
        }
        
      })

  

      .catch(function (error) {
        console.error(error);
      });
  
  
  }

  function printResultsTrending(resultObj) {

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
    cardBody.classList.add("card-img-overlay", "hidden")
    cardBody.setAttribute("style", "background-color: #1111119f; width: 70%; height: 100%; overflow: hidden;")
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
    cardText.setAttribute("style", "display:flex; flex-wrap: wrap; max-width: 200px; max-height: 100px;")
    cardBody.append(cardText)
    


    trendingSection.append(resultCard)
//     const cards = gsap.utils.toArray(".row")
//     console.log(cards);
//     cards.forEach(col => {
//     gsap.from(col, { 
//         scrollTrigger:{
//             trigger: ".first-section",
//             toggleActions: "restart resume resume restart "
//             } ,
//             opacity: 0,  
//             delay: .5,
//             ease: Expo.easeInOut,
//             duration: 1
//       })
// });

}

// =============
// =======Search Api
// ===========


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
        searchSection.textContent = locRes.results.length;
        console.log(locRes.results);
        if (!locRes.results.length) {
          console.log('No results found!');
          searchSection.innerHTML = '<h3>No results found, search again!</h3>';
        } else {
            searchSection.textContent = "";
          for (var i = 0; i < locRes.results.length; i++) {
            printResultsSearch(locRes.results[i]);
          }
        }
        
      })

  

      .catch(function (error) {
        console.error(error);
      });
  
  
  }

  

  function printResultsSearch(resultObj) {

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
    cardBody.classList.add("card-img-overlay", "hidden")
    cardBody.setAttribute("style", "background-color: #1111119f; width: 70%; height: 100%; overflow: hidden;")
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
    cardText.setAttribute("style", "display:flex; flex-wrap: wrap; max-width: 200px; max-height: 100px;")
    cardBody.append(cardText)
    


      searchSection.append(resultCard)
}



  function handleSearchFormSubmit(event) {
    event.preventDefault();
    firstSection.classList.remove('hidden') ;



    var searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal);
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchApi(searchInputVal);
    
    
  }



// =============
// =======Character Images
// ===========
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





trendingBtn.addEventListener("click", trendingApi)
searchFormEl.addEventListener("click", handleSearchFormSubmit);
form .addEventListener("submit", handleSearchFormSubmit);