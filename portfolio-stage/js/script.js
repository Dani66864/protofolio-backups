
var listes = document.querySelectorAll('li');
var standaardImage = document.querySelector('.image-standaard');
var firstimage = document.querySelector('.first-image');
var secondimage =  document.querySelector('.second-image');
var thirdImage = document.querySelector('.third-image');
var fourImage = document.querySelector('.four-image');
var fiveImage = document.querySelector('.five-image');
const navbar = document.querySelector('.nabars');
const openNavIcon = document.querySelector('.open');
const closeNavIcon = document.querySelector('.close');

let barsBox = document.querySelector('.bars-box');
    

barsBox.onclick = () => {
    navbar.style.visibility = "visible";
    openNavIcon.style.display = "none";
    closeNavIcon.style.display = "block";
}






listes[0].addEventListener('mouseover', function(){
    firstimage.style.opacity = "1";
    standaardImage.style.opacity = "0";
})

listes[0].addEventListener('mouseout', function(){
    firstimage.style.opacity = "0";
    standaardImage.style.opacity = "1";
})


listes[1].addEventListener('mouseover', function(){
    secondimage.style.opacity = "1";
    standaardImage.style.opacity = "0";
})
listes[1].addEventListener('mouseout', function(){
   secondimage.style.opacity = "0";
   standaardImage.style.opacity = "1";
})

listes[2].addEventListener('mouseover', function(){
    thirdImage.style.opacity = "1";
    standaardImage.style.opacity = "0";
})
listes[2].addEventListener('mouseout', function(){
    thirdImage.style.opacity = "0";
   standaardImage.style.opacity = "1";
})

listes[3].addEventListener('mouseover', function(){
    fourImage.style.opacity = "1";
    standaardImage.style.opacity = "0";
})
listes[3].addEventListener('mouseout', function(){
    fourImage.style.opacity = "0";
   standaardImage.style.opacity = "1";
})

listes[4].addEventListener('mouseover', function(){
    fiveImage.style.opacity = "1";
    standaardImage.style.opacity = "0";
})
listes[4].addEventListener('mouseout', function(){
    fiveImage.style.opacity = "0";
   standaardImage.style.opacity = "1";
})


window.onscroll = () =>{
    if(window.scrollY > 2){
        document.querySelector('.own-projecten__container').classList.add('testyt');
    }else{
        document.querySelector('.own-projecten__container').classList.remove('testyt')
    }
    }
