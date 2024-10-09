
  

var sliderContainer;
var slideButton;
let slideIndex;
let slideInterval;

let leftb;
let rightb;


if(document.body.id=="ind1")
var e=document.querySelector("iframe");
let a=2;

checkIframeLoaded();
function checkIframeLoaded() {
  if (e.contentWindow.document.querySelector('.slide-btn')!=null) {
      afterLoading();
      return;
  }
  window.setTimeout(checkIframeLoaded, 100);
}

function afterLoading(){
  

sliderContainer = e.contentWindow.document.querySelector('.slider-container');
slideButton = e.contentWindow.document.querySelector('.slide-btn');
slideIndex = 0;


function slideImages() {
  slideIndex = (slideIndex + 1) % 2; 
  const offset = slideIndex * -sliderContainer.clientWidth; 
  sliderContainer.style.overflow="visible";
  sliderContainer.style.transform = `translateX(${offset}px)`;
}

slideInterval = setInterval(slideImages, 5000);

slideButton.addEventListener('click', () => {
  clearInterval(slideInterval); 
  slideImages(); 
  slideInterval = setInterval(slideImages, 5000);
});
let seq={
  "blackhoodie":{
    left:"yellowtee",
    right:"bluecap",
  },
  "yellowtee":{
    left:"pinktee",
    right:"blackhoodie",
  },
  "bluecap":{
    left:"blackhoodie",
    right:"pinktee",
  },
  "pinktee":{
    left:"bluecap",
    right:"yellowtee",
  },
};

let leftb=e.contentWindow.document.querySelector(".merchleft");
let rightb=e.contentWindow.document.querySelector(".merchright");

leftb.addEventListener("click",()=>{

});

var f=true;
let b=e.contentWindow.document.querySelector(".open_main");

b.addEventListener("click",()=>{
  if(f)
  {
    c1();
    f=false;
  }
  else
  {
    c2();
    f=true;
  }
});
b.disabled=false;
}

function c1()
{
  document.querySelector(".title_area").style.transform="translateY(-20vh)";
  document.querySelector(".description").style.marginBottom="7.2vw";
  e.style.height="100vh";
  e.style.position="absolute";
}

function c2()
{
  document.querySelector(".title_area").style.transform="translateY(0)";
  e.style.height="4vw";
  setTimeout(()=>{
    e.style.position="static";
  document.querySelector(".description").style.marginBottom="0";
  },1000);
}