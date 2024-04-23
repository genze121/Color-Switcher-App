const spanButtons = document.querySelectorAll(".button");
const changeBodyColor = document.querySelector("body");

spanButtons.forEach(button => {
  button.addEventListener("click", event => {
    if (event.target.id === "grey") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "black";
    } else if (event.target.id === "white") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "black";
    } else if (event.target.id === "purple") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "white";
    } else if (event.target.id === "yellow") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "black";
    } else if (event.target.id === "orange") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "black";
    } else if (event.target.id === "blue") {
      changeBodyColor.style.backgroundColor = "rgba(0, 117, 171, 0.399)";
      changeBodyColor.style.color = "black";
    } else if (event.target.id === "green") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "black";
    } else if (event.target.id === "black") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "white";
    } else if (event.target.id === "indianred") {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "black";
    } else {
      changeBodyColor.style.backgroundColor = event.target.id;
      changeBodyColor.style.color = "black";
    }
  });
});
