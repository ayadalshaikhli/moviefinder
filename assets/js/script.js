







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


tm.from("background-text", 9,{
    opacity: 0,
    delay: 2,
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




