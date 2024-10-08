

let b2=document.querySelector(".open_main.o2");

b2.addEventListener("click",(ev)=>{
    if(document.querySelector("embed")==null)
    {
      let e=document.createElement("embed");
      e.type="text/html";
      e.src="./test.html";
      b=document.querySelector(".button_area");
      b.appendChild(e);
      b.style.height="100%";
      b.style.position="absolute";
    }
});