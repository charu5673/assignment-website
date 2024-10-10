let up=document.querySelector(".up");
let down=document.querySelector(".down");
let sb=document.querySelector(".bar");

up.disabled=true;

up.addEventListener("click",()=>{
    scrollup();
});

down.addEventListener("click",()=>{
    scrolldown();
});

sb.addEventListener("click",()=>{
    if(up.disabled==true)
        scrolldown();
    else
    scrollup();
});

function scrolldown()
{
    down.disabled=true;
    up.disabled=false;
    let wh2=document.querySelector(".willhide2");
    wh2.style.transform="translateY(0vh)";
    let wh1=document.querySelector(".willhide1");
    let t=document.querySelector(".title_area");
    if(r>1)
    t.style.transform="translateY(-7vh)";
    else
    t.style.transform="translateY(-15vh)";
    wh1.style.opacity="0";
    sb.style.marginTop="auto";
}

function scrollup()
{
    up.disabled=true;
    down.disabled=false;
    let wh2=document.querySelector(".willhide2");
    wh2.style.transform="translateY(100vh)";
    let wh1=document.querySelector(".willhide1");
    let t=document.querySelector(".title_area");
    t.style.transform="translateY(0vh)";
    wh1.style.opacity="1";
    sb.style.marginTop="0";
}


var r;

window.onload=()=>{
    r=window.innerWidth/window.innerHeight;
    if(r>1)
    {
    document.querySelector("body").style.fontSize=window.innerHeight/200+"vh";
    document.querySelector(".play2").style.height="10vh";
    document.querySelector(".decorexit").style.height="10vh";
    document.querySelector(".this").style.fontSize="0.5em";
    document.querySelector("h4").style.marginTop="25vh";
    document.querySelector(".imgs").style.flexDirection="row";
    document.querySelector(".images2").hidden=false;
    document.querySelector(".fth").hidden=false;
    document.querySelector(".tth").hidden=false;
    }
    else
    {
        document.querySelector("body").style.fontSize=window.innerHeight/200+"vw";
        document.querySelector(".play2").style.height="6vh";
        document.querySelector(".decorexit").style.height="6vh";
        document.querySelector(".this").style.fontSize="0.7em";
        document.querySelector("h4").style.marginTop="20vh";
        document.querySelector(".imgs").style.flexDirection="column";
        document.querySelector(".images2").hidden=true;
        document.querySelector(".fth").hidden=true;
        document.querySelector(".tth").hidden=true;
    }
    document.querySelector("body").style.height=window.innerHeight+"px";
    document.querySelector("body").style.width=window.innerWidth+"px";
  };
  
  window.resize=()=>{
    r=window.innerWidth/window.innerHeight;
    if(r>1)
    {
    document.querySelector("body").style.fontSize=window.innerHeight/200+"vh";
    document.querySelector(".play2").style.height="10vh";
    document.querySelector(".decorexit").style.height="10vh";
    document.querySelector(".this").style.fontSize="0.5em";
    document.querySelector("h4").style.marginTop="25vh";
    document.querySelector(".imgs").style.flexDirection="row";
    document.querySelector(".images2").hidden=false;
    document.querySelector(".fth").hidden=false;
    document.querySelector(".tth").hidden=false;
    }
    else
    {
        document.querySelector("body").style.fontSize=window.innerHeight/200+"vw";
        document.querySelector(".play2").style.height="6vh";
        document.querySelector(".decorexit").style.height="6vh";
        document.querySelector(".this").style.fontSize="0.7em";
        document.querySelector("h4").style.marginTop="20vh";
        document.querySelector(".imgs").style.flexDirection="column";
        document.querySelector(".images2").hidden=true;
        document.querySelector(".fth").hidden=true;
        document.querySelector(".tth").hidden=true;
    }
    document.querySelector("body").style.height=window.innerHeight+"px";
    document.querySelector("body").style.width=window.innerWidth+"px";
  };

document.querySelector(".exit").addEventListener("click",()=>{
    window.location.href = "./index.html";
});