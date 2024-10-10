
var sliderContainer;
var slideButton;
let slideIndex;
let slideInterval;
var flag=true;

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

function afterLoading()
{

  e.contentWindow.document.querySelector(".discover").addEventListener("click",()=>{
    if(flag)
      window.location.href = "./disc1.html";
    else
    window.location.href = "./disc2.html";
  });
  sliderContainer = e.contentWindow.document.querySelector('.slider-container');
  slideButton = e.contentWindow.document.querySelector('.slide-btn');
  slideIndex = 0;
  function slideImages()
  {
    slideIndex = (slideIndex + 1) % 2; 
    const offset = slideIndex * -sliderContainer.clientWidth; 
    sliderContainer.style.overflow="visible";
    sliderContainer.style.transform = `translateX(${offset}px)`;
  }
  slideInterval = setInterval(slideImages, 4000);
  let slideInterval2 = setInterval(moveright, 4000);
  let slideInterval3 = setInterval(gamemove, 4000);
  slideButton.addEventListener('click', () => {
  clearInterval(slideInterval); 
  slideImages(); 
  slideInterval = setInterval(slideImages, 4000);
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
  "game1":{
    right:"game2",
    color:"#45D689",
  },
  "game2":{
    right:"game1",
    color:"#843AFC",
  },
};

let leftb=e.contentWindow.document.querySelector(".merchleft");
let rightb=e.contentWindow.document.querySelector(".merchright");

leftb.addEventListener("click",()=>{
  clearInterval(slideInterval2);
  moveleft();
  slideInterval2 = setInterval(moveright, 4000);
});
rightb.addEventListener("click",()=>{
  clearInterval(slideInterval2);
  moveright();
  slideInterval2 = setInterval(moveright, 4000);
});


function moveleft()
{
  leftb.disabled=true;
  rightb.disabled=true;
  let curr=e.contentWindow.document.querySelector(".merchs1");
  curr=curr.children[0];
  curr=curr.src;
  let indx=curr.indexOf("AlabayMerch/");
  curr=curr.substring(indx+12);
  curr=curr.slice(0,-4);
  let next=seq[curr].left;
  let i=new Image();
  i.src="./assets/images/AlabayMerch/"+next+".png";
  e.contentWindow.document.querySelector(".merchs0").appendChild(i);
  e.contentWindow.document.querySelector(".merchs").style.transform="translateX(0vw)";
  let nextbg="./assets/images/AlabayMerch/"+next+"bck.png";
  e.contentWindow.document.querySelector(".currbg").style.opacity="0.5";
  setTimeout(()=>{
    e.contentWindow.document.querySelector(".currbg").children[0].src=nextbg;
    e.contentWindow.document.querySelector(".currbg").style.opacity="1";
  },500);
  setTimeout(()=>{
  e.contentWindow.document.querySelector(".merchs").style.transition="transform 0s";
  setTimeout(reset1(i),20);
  },1000);
}
function reset1(i)
{
  let str=""+e.contentWindow.document.querySelector(".merchs").style.transition;
  if(str!="transform 1s")
  {
    e.contentWindow.document.querySelector(".merchs").style.transform="translateX(-92vw)";
    e.contentWindow.document.querySelector(".merchs1").children[0].src=i.src;
    e.contentWindow.document.querySelector(".merchs0").children[0].remove();
    setTimeout(()=>{
      e.contentWindow.document.querySelector(".merchs").style.transition="transform 1s";
      leftb.disabled=false;
      rightb.disabled=false;
    },200)
  }
}

function moveright()
{
  leftb.disabled=true;
  rightb.disabled=true;
  let curr=e.contentWindow.document.querySelector(".merchs1");
  curr=curr.children[0];
  curr=curr.src;
  let indx=curr.indexOf("AlabayMerch/");
  curr=curr.substring(indx+12);
  curr=curr.slice(0,-4);
  let next=seq[curr].right;
  let i=new Image();
  i.src="./assets/images/AlabayMerch/"+next+".png";
  e.contentWindow.document.querySelector(".merchs2").appendChild(i);
  e.contentWindow.document.querySelector(".merchs").style.transform="translateX(-184vw)";
  let nextbg="./assets/images/AlabayMerch/"+next+"bck.png";
  e.contentWindow.document.querySelector(".currbg").style.opacity="0.5";
  setTimeout(()=>{
    e.contentWindow.document.querySelector(".currbg").children[0].src=nextbg;
    e.contentWindow.document.querySelector(".currbg").style.opacity="1";
  },500);
  setTimeout(()=>{
  e.contentWindow.document.querySelector(".merchs").style.transition="transform 0s";
  setTimeout(reset2(i),20);
  },1000);
}
function reset2(i)
{
  let str=""+e.contentWindow.document.querySelector(".merchs").style.transition;
  if(str!="transform 1s")
  {
    e.contentWindow.document.querySelector(".merchs").style.transform="translateX(-92vw)";
    e.contentWindow.document.querySelector(".merchs1").children[0].src=i.src;
    e.contentWindow.document.querySelector(".merchs2").children[0].remove();
    setTimeout(()=>{
      e.contentWindow.document.querySelector(".merchs").style.transition="transform 1s";
      leftb.disabled=false;
      rightb.disabled=false;
    },200)
  }
}

let gb=e.contentWindow.document.querySelector(".gamemove");
gb.addEventListener("click",()=>{
  clearInterval(slideInterval3);
  gamemove();
  slideInterval3 = setInterval(gamemove, 4000);
});

function gamemove()
{
  gb.disabled=true;
  let curr=e.contentWindow.document.querySelector(".img1game");
  curr=curr.src;
  let indx=curr.indexOf("AlabayGames/");
  curr=curr.substring(indx+12);
  curr=curr.slice(0,-4);
  let next=seq[curr].right;
  let color=seq[curr].color;
  let i="./assets/images/AlabayGames/"+next+".png";
  setTimeout(()=>{
    e.contentWindow.document.querySelector(".gameimage").style.transform="translateX(-94vw)";
    e.contentWindow.document.querySelector(".discover").style.backgroundColor=color;
    setTimeout(()=>{
    e.contentWindow.document.querySelector(".gameimage").style.transition="transform 0s";
    setTimeout(reset3(i,curr),10);
    },500);
  },10);
}
function reset3(i,v)
{
  let str=""+e.contentWindow.document.querySelector(".gameimage").style.transition;
  if(str!="transform 0.5s")
  {
    e.contentWindow.document.querySelector(".gameimage").style.transform="translateX(0vw)";
    e.contentWindow.document.querySelector(".img1game").src=i;
    e.contentWindow.document.querySelector(".img2game").src="./assets/images/AlabayGames/"+v+".png";
    setTimeout(()=>{
      e.contentWindow.document.querySelector(".gameimage").style.transition="transform 0.5s";
      flag=!flag;
      gb.disabled=false;
    },100)
  }
}

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
  if( screen.width <= 480 ) {
    e.style.height="92vh";
}
else
e.style.height="100vh";
  e.style.position="absolute";
}

function c2()
{
  document.querySelector(".title_area").style.transform="translateY(0)";
  e.style.height="5vw";
  setTimeout(()=>{
    e.style.position="static";
  },1000);
}

window.onload=()=>{
  let r=window.innerWidth/window.innerHeight;
  if(r>1)
  document.querySelector(".content").style.fontSize=window.innerHeight/200+"vh";
  else
  document.querySelector(".content").style.fontSize=window.innerHeight/200+"vw";
};

window.resize=()=>{
  let r=window.innerWidth/window.innerHeight;
  if(r>1)
  document.querySelector(".content").style.fontSize=window.innerHeight/200+"vh";
  else
  document.querySelector(".content").style.fontSize=window.innerHeight/200+"vw";
};