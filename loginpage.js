let btn = document.getElementById('btn');
let tagline = document.getElementById('tagline');
let box = document.getElementsByClassName('box');

function themecolor(color)
{
    tagline.style.borderColor = color;
    btn.style.background = color;
    document.querySelectorAll("span").forEach((element)=>{
    element.classList.remove("active");
    });
    box.innerHTML = ".box:before {background : color}";
    event.target.classList.add("active");
}



/*
let btn = document.getElementById("btn");
let txt = document.getElementById("txt");
function changecolor(color) {
  txt.style.borderColor = color;
  btn.style.background = color;
  document.body.style.background = color;

  document.querySelectorAll("span").forEach(function (item) {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
}  */