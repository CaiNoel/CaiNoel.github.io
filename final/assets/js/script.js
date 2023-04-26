document.querySelector("#retroToggle").onclick = function(){
  const body = document.querySelector("#body");
  const modernToggle = document.querySelector("#modernToggle");
  const retroToggle = document.querySelector("#retroToggle");
  const modernNav = document.querySelector("#modernNav");
  const retroNav = document.querySelector("#retroNav");
  const mainContent = document.querySelector("#mainContent");
  const retroContent = document.querySelector("#retroContent");

  modernNav.style.display = "none";
  retroToggle.style.display = "none";

  modernToggle.style.display = "block";
  retroNav.style.display = "flex";

  body.style.backgroundImage = "url(../final/assets/img/bg.jpeg)";

  mainContent.style.display = "none";
  retroContent.style.display = "block";

}

document.querySelector('#modernToggle').onclick = function(){
  const body = document.querySelector("#body");
  const modernToggle = document.querySelector("#modernToggle");
  const retroToggle = document.querySelector("#retroToggle");
  const modernNav = document.querySelector("#modernNav");
  const retroNav = document.querySelector("#retroNav");
  const mainContent = document.querySelector("#mainContent");
  const retroContent = document.querySelector("#retroContent");

  modernNav.style.display = "flex";
  retroToggle.style.display = "initial";

  modernToggle.style.display = "none";
  retroNav.style.display = "none";

  body.style.backgroundColor = "#b2c3e9";
  body.style.backgroundImage = "none";

  mainContent.style.display = "block";
  retroContent.style.display = "none";
}
