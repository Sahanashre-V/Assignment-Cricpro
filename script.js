
let playername = document.querySelectorAll(".playername");
let addImage = document.querySelectorAll(".img");

for (let j = 0; j < playername.length; j++) {
  let name = playername[j];
  let image = addImage[j];

  name.addEventListener("click", function (event) {
    event.stopPropagation(); // stopPropagation is used because it stops the event from propagating up or down the DOM hierarchy. 

    image.classList.toggle("img");
    image.style.position = "absolute";
  });
}
